const express=require('express')
const app=express.Router()
const ProductController = require('../controller/product')

app.post('/products',ProductController.addNewProducts)
app.get('/products',ProductController.getAllProducts)

module.exports=app;