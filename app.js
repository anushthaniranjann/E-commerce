const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.urlencoded({ extended: false })); Alternative for body-parser

const port = process.env.PORT || 3000

app.use('/add-product', (req, res, next) => {
    console.log('Gud Night');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</form>');
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

app.use('/', (req, res, next) => {
    res.send('<h1>Hello</h1>');
});

app.listen(port, port, () => {
    console.log(`Server is up on port ${port}`)
});