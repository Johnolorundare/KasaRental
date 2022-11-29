const cors = require('cors');
const express = require('express');
const app = express();
const Mongoose = require('mongoose');

require("dotenv").config();
const { MONGOUSER, MONGOPASSWORD, MONGOHOST, MONGOPORT, MONGODATABASE } = process.env;
const PORT = process.env.PORT || 4000;

const userRoute = require('./src/routes/user.route');
const appRoute = require('./src/routes/app.route');

app.use(cors());
app.use(express.json());
app.use('/api/user', userRoute);
app.use('/api/static/images', appRoute);

app.get('/', (req, res) => {
    res.status(200).send("Welcome to the oneshop backend");
})


Mongoose.connect(`mongodb://${ MONGOUSER }:${ MONGOPASSWORD }@${ MONGOHOST }:${ MONGOPORT }/${ MONGODATABASE }?authSource=admin`)
.then(() => {
  app.listen(PORT, () => {
    console.log(`Database connected and server running on port: ${PORT}`);
  })
})
.catch((err) => {console.log(new Error(err))})
