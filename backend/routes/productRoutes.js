import express from 'express'                                  
import { getProducts, getProductById } from '../controllers/productController.js'
const router = express.Router()                 



//@desc fetch all products                              
//@route GET route /api/prodcuts
//@access Public
router.get('/', getProducts)                        


//@desc fetch single product by id                              
//@route GET route /api/products/:id
//@access Public
router.get('/:id', getProductById) 
      

export default router                                               

