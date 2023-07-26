const http = require('https');
const start = Date.now();
const fs = require('fs');
const crypto = require("crypto");


function async() {
    http.request('https://www.google.com', (res) => {
        res.on('data', () => { })
        res.on('end', () => {
            console.log(Date.now() - start);
        })
    }).end();
}

function cryptoFunc() {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
        console.log('1:', Date.now() - start)
    
    })
}

async();

fs.readFile('multiTask.js', 'utf8', () => {
    console.log("FS:", Date.now() - start);
})

cryptoFunc();
cryptoFunc();
cryptoFunc();
cryptoFunc();
