

import asyncHandler from 'express-async-handler'               
import Products from '../models/productModel.js'          

//@desc fetch all products                             
//@route GET route /api/products
//@access Public
const getProducts = asyncHandler(async (req, res) =>  {              
    const products = await Products.find({})                                     
    res.json(products)              

})
//@desc fetch single product by id                              
//@route GET route /api/products/:id
//@access Public
const getProductById = asyncHandler(async (req, res) => {               
 const product = await Products.findById(req.params.id)                               
 if (product) {                                                             
    res.json(product)
}   else {
    res.status(404).json({message: 'Product not found'})                     
    throw new error('Product not found')                           
}
})



export {getProducts, getProductById}