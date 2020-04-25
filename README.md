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
