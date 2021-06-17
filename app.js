const http = require('http');
const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('in middleware')
    next(); //allows req to conitnue to next middleware
});

app.use((req, res, next) => {
    console.log('Tired')
});

const server = http.createServer(app);

server.listen(2000);