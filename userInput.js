//import * as readline from "node:readline";

const readline = require("readline");

// createInterface allows us to read and print information from the terminal
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

rl.question("what's up, Abel? ", handleFirstResponse);
function handleFirstResponse(firstAnswer) {
    console.log("First response: " + firstAnswer);
    rl.question("how are you?", handleSecondResponse);
}

function handleSecondResponse(secondAnswer) {
    console.log("Second response: " + secondAnswer);
    rl.question("Welcome", handleThirdResponse);
}

function handleThirdResponse(thirdAnswer) {
    console.log("Third response: " + thirdAnswer);
    rl.close();
}

