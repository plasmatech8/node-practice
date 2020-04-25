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
