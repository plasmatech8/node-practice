
// 5. Working with the File System Module, pt. 2 (folders)
const fs = require('fs');

// mkdir
fs.mkdir('tutorial_dir', (err)=>{
    if(err) console.log(err)
    else console.log('Folder Sucessfully created')
});

// rmdir
fs.rmdir('tutorial_dir', (err)=>{ // only works on empty folders
    if(err) console.log(err)
    else console.log('Folder Sucessfully deleted')
});

// Recursive delete folder
fs.mkdir('tutorial_dir', ()=>{});
fs.writeFile('tutorial_dir/example1.txt', 'something', ()=>{})
fs.writeFile('tutorial_dir/example2.txt', 'something', ()=>{})
fs.readdir('tutorial_dir', (err, files)=>{ // How to delete non-empty folder
    if(err) console.log(err)
    else {
        for(let file of files){
            fs.unlink('tutorial_dir/' + file, (err)=>{  // delete
                if(err) console.log(err)
                else console.log('Successfully deleted a file')
            });
        }
        fs.rmdir('tutorial_dir', (err)=>{
            if(err) console.log(err)
            else console.log('Folder Sucessfully deleted')
        });
    }
});