document.getElementById('checkButton')!.addEventListener('click', () => {
    const marksInput = (document.getElementById('marksInput') as HTMLInputElement).value;
    const totalMarksInput = (document.getElementById('totalMarksInput') as HTMLInputElement).value;
    const resultElement = document.getElementById('result')!;
    
    const marks = Number(marksInput);
    const totalMarks = Number(totalMarksInput);

    // Ensure valid input
    if (isNaN(marks) || isNaN(totalMarks) || totalMarks <= 0) {
        resultElement.textContent = "Please enter valid marks and total marks.";
        resultElement.style.color = 'red';
        return;
    }

    // Calculate percentage
    const percentage = (marks / totalMarks) * 100;

    // Determine pass or fail based on percentage
    const passingPercentage = 40; // Set passing percentage
    if (percentage >= passingPercentage) {
        resultElement.textContent = `✅ You passed with a percentage of ${percentage.toFixed(2)}%!`;
        resultElement.style.color = 'black';
    } else {
        resultElement.textContent = `❌ You failed with a percentage of ${percentage.toFixed(2)}.`;
        resultElement.style.color = 'red';
    }
});
