const express = require('express');
const Product = require('../models/product.model');
// router = express.Router;



const getProducts = async(req,res) =>{

    try{
        const products = await Product.find({});
        res.status(200).json(products);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}

const getProduct = async(req,res) =>{

    try{
        const id = req.params.id;
        const products = await Product.findOne({"_id":id});
        if (!products) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(products);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}


const updateProduct = async(req,res) =>{

    try{
        const id = req.params.id;
        const product = await Product.updateOne({"_id":id}, req.body);
        
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        const updproduct = await Product.findOne({"_id":id});
        res.status(200).json(updproduct);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}

const insertProduct = async(req,res) =>{

    try{
        const product = await Product.create(req.body);
        res.status(200).json(product);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}



const deleteProduct = async(req,res) =>{

    try{
        const id = req.params.id;
        const result = await Product.deleteOne({"_id":id});
        
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Product not found" });
        }

        // const updproduct = await Product.findOne({"_id":id});
        res.status(200).json("Product with id : "+id+" deleted successfully");
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}


module.exports = {
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct,
    insertProduct
};