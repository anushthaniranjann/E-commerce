const express = require('express');

const router = express.Router();

// /admin/add-product =>  Get
router.get('/add-product', (req, res, next) => {
    console.log('Product added');
    res.send('<form action="/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</form>');
});

// /admin/add-product => POST
router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;