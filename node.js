//creating a server


// const server = require('http')

// server.createServer((request,response) => {
//     response.write('hello')
//     response.end()
// }).listen(5000,() => {
//     console.log('server is listening on port 5000');
// })

// //creating modules
// const date = require('./date2')
// console.log(date);

//creating file system modules
// const fs = require('fs')

// const server = require('http')
    // fs.writeFile('index.text', 'Node.js is interesting to learn', (err) => {
    //   if (err) {
    //     console.log('there is an error displaying this file');
    //   } else {
    //     console.log('file has being created successfully');
    //   }
    // });

//reading a file from a created file on the server
//     fs.readFile('index.text','utf-8', (err,data) => {
//         server.createServer((request, response) => {
//             console.log(data);
//             response.write(data)
//             response.end()
// }).listen(4000,() => {
//     console.log("listening on port 4000");
// })})

// appending a file
// const fs = require('fs')
// fs.appendFile('index.text','this is an updatedfile',(err) => {
//     if(err){
//         console.log('error');
//     }
//     else{
//         console.log('successfully updated');
//     }
// }

//url module
const url = require('url')

const url2 = 'http://www.ghj.com'


const result = url.parse('url2',true)
console.log(result);

// fs.writeFile('index.text', 'Node.js is interesting to learn', (err) => {
//       if (err) {
//         console.log('there is an error displaying this file');
//       } else {
//         console.log('file has being created successfully');
//       }
//     });

//deleting a file
// fs.unlink('index.text',(err) => {
//     if(err){
//     console.log(err);}
//     else{
//         console.log('deleted succesfully');
//     }
// })
//  fs.rename('summer.js','node.js',(err) => {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('successfully renamed a file');
//     }
//  })
//creating a file
const server = require('http');
const fs = require('fs');

 fs.writeFile('react.html','learning serverside programming is fun',(err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log('the terminal has successsfully created a file');
    }
 })

 //updating data in the file
 

 fs.appendFile('react.html','and i am hoping to become a MERN stack developer',(err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log('this file has being updated successfully');
    }
 })

 //reading the updated data in the file and displaying it on the server 7000
 fs.readFile('react.html', 'utf-8', (err, data) => {
   console.log(data);
server.createServer((req,res) => {
    res.write(data)
    res.end()
}).listen(7000,() => {
    console.log('server is listening on port 7000');
})
 });

 //deleting the file
 fs.unlink('index.text',(err) => {
if(err){
    console.log(err);
}
else{
    'this file has being deleted'
}
 })

