import express from 'express'
import { addProduct, deleteProduct, editProduct, getProduct, getProductById, home, upload } from '../controllers/productController.mjs'
export const router=express.Router()
router.get('/',home)
   
router.get('/getProduct',getProduct)
router.get('/getProductById/:id',getProductById)
router.post('/addProduct',upload.single("image"),addProduct);
router.delete('/deleteProduct/:id',deleteProduct)
router.patch('/editProduct/:id',upload.single("image"),editProduct)