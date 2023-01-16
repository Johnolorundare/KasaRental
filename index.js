const cors = require('cors');
const express = require('express');
const app = express();
const Mongoose = require('mongoose');

require("dotenv").config();
const { MONGOUSER, MONGOPASSWORD, MONGOHOST, MONGOPORT, MONGODATABASE } = process.env;
const PORT = process.env.PORT || 4000;

const userRoute = require('./src/routes/user.route');
const appRoute = require('./src/routes/app.route');
const itemRoute = require('./src/routes/item.route');
const orderRoute = require('./src/routes/order.route');
const categoryRoute = require('./src/routes/category.route');
const reviewRoute = require('./src/routes/review.route');

app.use(cors());
app.use(express.json());
app.use('/api/user', userRoute);
app.use('/api/static/images', appRoute);
app.use('/api/category', categoryRoute);
app.use('/api/review', reviewRoute);
app.use('/api/item', itemRoute);
app.use('/api/order', orderRoute);

app.get('/', (req, res) => {
    res.status(200).send("Welcome to the oneshop backend");
})

const dbLocal = false;
// Mongoose.connect(`mongodb+srv://${ MONGOUSER }:${ MONGOPASSWORD }@${ MONGOHOST }/${ MONGODATABASE }`)
Mongoose.connect(dbLocal ? 
`mongodb://localhost:27017/oneshop` : 
`mongodb+srv://${ MONGOUSER }:${ MONGOPASSWORD }@${ MONGOHOST }/${ MONGODATABASE }`
)
.then(() => {
  app.listen(PORT, () => {
    console.log(`Database connected and server running on port: ${PORT}`);
  })
})
.catch((err) => {console.log(new Error(err))})
