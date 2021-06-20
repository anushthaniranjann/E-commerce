const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.urlencoded({ extended: false })); Alternative for body-parser

const port = process.env.PORT || 3000

app.use(adminRoutes);
app.use(shopRoutes);


app.listen(port, port, () => {
    console.log(`Server is up on port ${port}`)
});