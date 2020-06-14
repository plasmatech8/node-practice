
// 3. Working with the ReadLine module
const readline = require('readline');

// Quiz input
const rl = readline.createInterface({input : process.stdin,
                                    output : process.stdout});
let num1 = Math.floor(Math.random() * 10 + 1);
let num2 = Math.floor(Math.random() * 10 + 1);
rl.question(`What is ${ num1 } plus ${ num2 }?\n`, (userInput)=>{
    let attempt = userInput.trim();
    let answer = num1 + num2;
    if (attempt == answer){
        console.log('Correct!')
        rl.close(); // Close the input stream
    } else {
        console.log(`Incorrect response (${userInput}), please try again`)
        rl.on('line', (userInput)=>{
            if(userInput.trim() == answer){
                console.log('Correct!')
                rl.close()
            } else {
                rl.setPrompt(`Incorrect response (${userInput}), please try again\n`)
                rl.prompt();
            }
        });
    }
});
// Note: rl is an EventEmitter and close() also calls the close event
// Note: use rl.on('line') to continue running until user enters correctly (on newline)

