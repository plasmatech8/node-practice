
// 1. Working with Modules
const tutorial = require('./tutorial'); // (import module)
console.log(tutorial);
console.log(tutorial.sum(1, 1));
console.log(tutorial.PI);
console.log(new tutorial.SomeObject());