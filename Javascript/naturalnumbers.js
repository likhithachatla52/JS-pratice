// Function to print numbers from 1 to N
function printNumbers(N) {
    for (let i = 1; i <= N; i++) {
        console.log(i);
    }
}

// Example usage:
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user to enter the value of N
rl.question("Enter the value of N: ", (input) => {
    const N = parseInt(input, 10);
    printNumbers(N);
    rl.close(); // Close the readline interface
});
