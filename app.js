console.log('Hello World from NodeJS');

// 1. Working with Modules
/*
const tutorial = require('./tutorial'); // (import module)
console.log(tutorial);
console.log(tutorial.sum(1, 1));
console.log(tutorial.PI);
console.log(new tutorial.SomeObject());
*/

// 2. The Events Module and the EventEmitter class
/*
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
eventEmitter.on('tutorial', (x) => {
    console.log('tutorial event has occurred: ' + x);
})
eventEmitter.emit('tutorial', 42);

class Person extends EventEmitter{
    constructor(name){
        super(name);
        this._name = name;
    }
    get name(){
        return this._name;
    }
}
let pedro = new Person('Pedro');
pedro.on('name', ()=>{
    console.log('My name is ' + pedro.name);
});
pedro.emit('name');
*/

// 3. Working with the ReadLine module
/*
const readline = require('readline');
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
*/

// 4. Working with the File System Module

const fs = require('fs');
fs.writeFile('example.txt', 'this is an example', (err)=>{
    if(err) console.log(err)
    else console.log('File Sucessfully created')
});
fs.readFile('example.txt', encoding='utf-8', (err, file)=>{
    if(err) console.log(err);
    else console.log('Content:' + file);
});
fs.rename('example.txt', 'example2.txt', (err)=>{
    if(err) console.log(err)
    else console.log('Successfully renamed the file')
});
fs.appendFile('example2.txt', '\nsome data being appended.', (err)=>{
    if(err) console.log(err)
    else console.log('Successfully appended data to the file')
});
fs.unlink('example2.txt', (err)=>{  // delete
    if(err) console.log(err)
    else console.log('Successfully deleted the file')
});
