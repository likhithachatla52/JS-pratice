const readline = require('readline');

// Create an interface to read input from the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to check if the student has passed or failed
function checkPassFail(marks) {
    const passingMark = 40;

    if (marks >= passingMark) {
        return "The student has passed.";
    } else {
        return "The student has failed.";
    }
}

// Ask the user to enter the student's marks
rl.question("Enter the student's marks: ", (input) => {
    const studentMarks = parseInt(input, 10);
    const result = checkPassFail(studentMarks);
    console.log(result);
    rl.close(); // Close the readline interface
});
