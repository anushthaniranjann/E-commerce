//const http = require('http')
const express = require('express');

const app = express();
//const server = http.createServer(app)

const port = process.env.PORT || 3000

app.use('/add-product', (req, res, next) => {
    console.log('Tired');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</form>');
});

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

app.use('/', (req, res, next) => {
    console.log('Tired');
    res.send('<h1>Hello</h1>');
});

// server.listen(port, () => {
//     console.log(`Server is up on port ${port}`)
// })

app.listen(port, port, () => {
    console.log(`Server is up on port ${port}`)
});