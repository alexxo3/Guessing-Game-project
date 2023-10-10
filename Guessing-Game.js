const readline = require("readline");

const rl = readline.createInterface({output: process.stdout, input: process.stdin});

let secretNumber = 24;

function checkGuess(num) {
    if(num>secretNumber) {
        console.log("Too high");
        return false;
    }
    else if(num<secretNumber) {
        console.log("Too low");
        return false;
    }
    else {
        console.log("Correct");
        return true;
    }
}

function askGuess() {
    rl.question("Enter a guess: ", (answer)=> {
        let num = Number(answer);
        if(checkGuess(num)) {
            console.log("You win");
        } else {
            askGuess();
        }
        rl.close();
    });
}

askGuess()
