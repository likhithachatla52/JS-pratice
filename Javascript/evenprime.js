// Function to check if a number is even or odd
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        console.log(number + " is even.");
    } else {
        console.log(number + " is odd.");
    }
}

// Get the input from the command line arguments
let userInput = process.argv[2]; // The third argument is the user input
let num = parseInt(userInput); // Convert the input to an integer

// Check if the input is a valid number
if (!isNaN(num)) {
    checkEvenOrOdd(num);
} else {
    console.log("Please enter a valid number.");
}
