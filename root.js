document.getElementById('checkButton').addEventListener('click', function () {
    var marksInput = document.getElementById('marksInput').value;
    var totalMarksInput = document.getElementById('totalMarksInput').value;
    var resultElement = document.getElementById('result');
    var marks = Number(marksInput);
    var totalMarks = Number(totalMarksInput);
    // Ensure valid input
    if (isNaN(marks) || isNaN(totalMarks) || totalMarks <= 0) {
        resultElement.textContent = "Please enter valid marks and total marks.";
        resultElement.style.color = 'red';
        return;
    }
    // Calculate percentage
    var percentage = (marks / totalMarks) * 100;
    // Determine pass or fail based on percentage
    var passingPercentage = 40; // Set passing percentage
    if (percentage >= passingPercentage) {
        resultElement.textContent = "\u2705 You passed with a percentage of ".concat(percentage.toFixed(2), "%!");
        resultElement.style.color = 'black';
    }
    else {
        resultElement.textContent = "\u274C You failed with a percentage of ".concat(percentage.toFixed(2), ".");
        resultElement.style.color = 'red';
    }
});
