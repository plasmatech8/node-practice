
// 4. Working with the File System Module
const fs = require('fs');

// Write, read, rename, append, delete
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
