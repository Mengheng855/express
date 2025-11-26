import multer from "multer"
import { getProductByIdModel, getProductModel, addProductModel, deleteProductModel, editProductModel } from "../models/productModel.mjs"

const storage=multer.diskStorage({
    destination:(req,file,cd)=>{
        cd(null,"public/image");
    },
    filename:(req,file,cd)=>{
        const filename=Date.now()+"-"+file.originalname
        cd(null,filename)
    }
})
export const upload=multer({storage})
export const home=(req,res)=>{
    return res.json({
        msg:"welcome to express"
    })
}
export const getProduct=async(req,res)=>{
    try {
        const data=await getProductModel()
        return res.json({
            msg:"success",
            status:200,
            data:data
        })
    } catch (error) {
        return res.json({
            msg:error
        })
        
    }   
}
export const getProductById=async(req,res)=>{
    try {
        const id=req.params.id
        const data=await getProductByIdModel(id)
        return res.json({
            msg:"success",
            status:200,
            data:data
        })
    } catch (error) {
        return res.json({
            msg:error,
        })
    }
}
export const addProduct=async(req,res)=>{
    try {
        const {product_name,price,qty}=req.body;
        const image=req.file?req.file.filename:null;
        const total=price*qty
        const data=await addProductModel(product_name,price,qty,total,image)
        return res.json({
            msg:"created",
            status:201,
        })
    } catch (error) {
        return res.status(500).json({
            error: error.message
        });
    }
}
export const deleteProduct=async(req,res)=>{
    try {
        const id=req.params.id
        const data=await deleteProductModel(id)
        return res.json({
            msg:"deleted",
            status:200
        })
    } catch (error) {
        console.error(error);
        
    }
}
export const editProduct=async(req,res)=>{
    try {
        const id=req.params.id
        const {product_name,price,qty}=req.body;
        const image=req.file?req.file.filename:null
        const total=price*qty
        await editProductModel(id,product_name,price,qty,total,image)
        return res.json({
            msg:"edited",
            status:200
        })
    } catch (error) {
        console.error(error);
        
    }
}