// file system module in node js
// Common use for the File System module:

// Read files
// Create files
// Update files
// Delete files
// Rename files

const fs = require("fs");
const http = require("http");

// creating a server object
http
  .createServer(function (req, res) {
    // read a file by fs module

    fs.readFile("./demohtml.html", (err, data) => {
      if (!err) {
        // setting http response header
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      } else if (err) {
        console.log(err);
      }
    });

    // by using writeFile we can create a file and write on that file

    fs.writeFile('./text.txt', 'this file is created by using file system module in node js', (err)=>{
        if(err) throw err;
        console.log('Saved!')
    })

    // by using appendFile we can add new text to a exsiting file

    fs.appendFile('./text.txt', 'this text is an append text which is appended by using appendFile function', (err)=>{
        if(err) throw err;
        console.log('text appended successfully!!')
    })

    // The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created

    fs.open('new_file.txt', 'w', (err, file)=>{
        if(err) throw err;
        console.log('Saved!!')
    })

    // fs.unlink() is used to delete a file

    fs.unlink('new_file.txt', (err)=>{
        if(err) throw err;
        console.log('file deleted successfully!!')
    })

    // fs.rename() is used to rename a file name

    fs.rename('text.txt', 'text1.txt', (err)=>{
        if(err) throw err;
        console.log('File name changed!')
    })
  })
  .listen(5790);

console.log("Server is running at http://localhost:5790");

// thats all for file system module