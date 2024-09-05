const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
// app.use(express.urlencoded({extended:false}));
// const uri = require('./atlas_uri');
require('dotenv').config();

const uri = process.env.MONGO_URI;
const Product = require('./models/product.model');
const ProductRoute = require('./routes/product.route');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.use("/api/products",ProductRoute);

mongoose.connect(uri).then(() => { 
    console.log('Connected to MongoDB'); 
    console.log(PORT)
}).catch((error) => { 
    console.log('Connection failed:', error); 
});