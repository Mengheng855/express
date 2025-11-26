import { db } from "../config/db.mjs"


export const getProductModel = async () => {
    const [getProduct] = await db.query("SELECT * FROM product");
    return getProduct;
};
export const getProductByIdModel=async(id)=>{
    const [getProductByIdModel]=await db.query("SELECT * FROM product WHERE id=?",id)
    return getProductByIdModel
}
export const addProductModel=async(product_name,price,qty,total,image)=>{
    const [result]=await db.query("INSERT INTO product(product_name,price,qty,total,image) VALUES (?,?,?,?,?)",[product_name,price,qty,total,image])
    return result;
}
export const deleteProductModel=async(id)=>{
    const [deleteProductModel]=await db.query("DELETE FROM product WHERE id=?",id)
    return deleteProductModel
}
export const editProductModel=async(id,product_name,price,qty,total,image)=>{
    const [editProductModel]=await db.query("UPDATE product SET product_name=?,price=?,qty=?,total=?,image=? WHERE id=?",[product_name,price,qty,total,image,id])
    return editProductModel
}
















