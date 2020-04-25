# node-practice

https://www.youtube.com/watch?v=RLtyhwFtXQA

## Getting Started

Install NodeJS (Linux): `sudo apt install nodejs`

Run a JavaScript module using node: `node app.js`

## Working with Modules

We can seperate database call, math, api requests, ect into seperate files.

We will create `tutorial.js` with a `sum` function. 

To allow the function from the module to be accessible by `app.js`, we need to add it to add it to the `module.exports` object in our module. In `app.js` we need to have `const tutorial = require('./tutorial.js')` to import the `module.exports` object.

It is best to use either `module.exports = {something: something};` or `module.exports.something = something;` so that we have a namespace which can hold multiple functions in our JavaScript module.

tutorial.js
```js
const sum = (num1, num2) => num1 + num2;
const PI = 3.14;
class SomeObject{
    constructor(){
    }
}

module.exports.sum = sum;
module.exports.PI = PI;
module.exports.SomeObject = SomeObject;
```
app.js
```js
const tutorial = require('./tutorial');

console.log(tutorial);
console.log(tutorial.sum(1, 1))
console.log(tutorial.PI)
console.log(tutorial.SomeObject)

console.log('Hello World from NodeJS');
```

## The Events Module and EventEmitter Class

The events module allows us to bring event driven programming to NodeJS.

We can import the EventEmitter constructor using `require('events')`.

We can instantiate an object, then use the `on` function to create an event, and the `emit` function to call the event.
```js
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
eventEmitter.on('tutorial', (x) => {
    console.log('tutorial event has occurred: ' + x);
})
eventEmitter.emit('tutorial', 42);
```

What we can do is create a class which extends from the `EventEmitter` class.
```js
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
```

Note that events are synchonous.

## 3. Working with the ReadLine module

Used for user input.

`process` is a global object provided by default by Node.

We use the `readline` module to do user input and cycle until the user inputs a correct response.
```js
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
```