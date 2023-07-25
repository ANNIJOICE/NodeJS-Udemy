const http = require('https');
const start = Date.now();


function async() {
    http.request('https://www.google.com', (res) => {
        res.on('data', () => { })
        res.on('end', () => {
            console.log(Date.now() - start);
        })
    }).end();
}

async();
async();
async();
async();
async();
