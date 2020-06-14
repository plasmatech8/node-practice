# node-practice

FreeCodeCamp tutorial: https://www.youtube.com/watch?v=RLtyhwFtXQA

## Getting Started

Install NodeJS (Linux): `sudo apt install nodejs`

Run a JavaScript module using node: `node app.js`

## 01. Working with Modules

We can seperate database call, math, api requests, ect into seperate files.

We will create `tutorial.js` with a `sum` function.

We can to add it to add it to the `module.exports` object so that it can be imported by To allow the function from the module to be `app.js`.

It is best to use either `module.exports = {something: something};` or `module.exports.something = something;` so that we have a namespace which can hold multiple functions in our JavaScript module.

* [tutorial.js](tutorial.js)
* [app_01_modules.js](app_01_modules.js)


## 02. The Events Module and EventEmitter Class

The events module allows us to bring event driven programming to NodeJS.

We can import the EventEmitter constructor using `require('events')`.

We can instantiate an object, then use the `on` function to create an event, and the `emit` function to call the event.

We can also create a class which extends from the `EventEmitter` class.

Note that events are synchonous.

* [app_02_events.js](app_02_events.js)


## 03. Working with the ReadLine module

Used for user input.

We use the `readline` module to do user input and cycle until the user inputs a correct response.

Note that `process` is a global object provided by default by Node.

* [app_03_events.js](app_03_events.js)

## 04. Working with the File System Module

We can use `const fs = require('fs');` to work with the filesystem.

Note that if we do not include encoding, we will be given a buffer stream object instead of the contents of the file.

* [app_04_filesystem_files.js](app_04_filesystem_files.js)


## 05. Working with the File System Module, pt 2 (folders)

We can create/delete folders and delete non-empty folders by first listing & deleting all files in the directory.

* [app_05_filesystem_folders.js](app_05_filesystem_folders.js)

## 06. Working with Readable And Writable Streams

A stream is more efficient way to transfer data.

We should use streams when we want to transfer data from a really large file to another place. (Do not use fs.readFile or else it will use up all of your RAM).

Pipes can be used as a short-hand method to do this.

Pipe Chaining can be used to create a pipe where we zip the file contents before piping into the next step.

* [app_06_streams.js](app_06_streams.js)

## 07.
