const express = require('express');
const app = express();
const cluster = require('cluster');
const crypto = require("crypto");
process.env.UV_THREADPOOL_SIZE = 1;
console.log(cluster.isMaster)
if(cluster.isMaster) {
    cluster.fork();
    cluster.fork();
    cluster.fork();
    cluster.fork();
    cluster.fork();
    cluster.fork();
} else {
    
    app.get('/', (req, res) => {
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
            res.send("Hello Joice");
        })  
    });

    app.get('/fast', (req, res) => {
        res.send("This is fast");
    });
    
    app.listen(3000)
}



// Else part before benchmark Refactor

// function doWork(duration) {
//     const start = Date.now();
//     while(Date.now() - start < duration) {}
// }

// app.get('/', (req, res) => {
//     doWork(5000);
//     res.send("Hello Joice");
// });

// app.get('/fast', (req, res) => {
//     res.send("This is fast");
// });

// app.listen(3000)
