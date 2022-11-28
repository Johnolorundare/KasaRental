const path = require('path');
const cors = require('cors');
const express = require('express');
const app = express();
const Mongoose = require('mongoose');
const { Schema, model } = Mongoose;

require("dotenv").config();
const { MONGOUSER, MONGOPASSWORD, MONGOHOST, MONGOPORT, MONGODATABASE } = process.env;
const PORT = process.env.PORT || 4000;

const userRoute = require('./src/routes/user.route');

app.use(cors());
app.use(express.json());
app.use('/api/user', userRoute);

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'src', 'assets', 'icon.png'));
})


Mongoose.connect(`mongodb://${ MONGOUSER }:${ MONGOPASSWORD }@${ MONGOHOST }:${ MONGOPORT }/${ MONGODATABASE }?authSource=admin`)
.then(() => {
  app.listen(PORT, () => {
    console.log(`Database connected and server running on port: ${PORT}`);
  })
})
.catch((err) => {console.log(new Error(err))})
