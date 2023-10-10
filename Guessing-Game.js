const readline = require("readline");

const rl = readline.createInterface({output: process.stdout, input: process.stdin});

function askRange() {
    rl.question("Enter the minimum number: ", (min)=>{
        min = Number(min);
        rl.question("Enter the maximimum number: ", (max)=>{
            max = Number(max);
            //
            randomInRange(min,max);
            rl.close();
        })
    })
}

function randomInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random()*(max-min) + min);
}

let secretNumber = randomInRange(20,30);

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



askRange()
