import { db } from "../db.mjs";
export const getUserModel=async()=>{
    const [rows]=await db.query("SELECT * FROM user")
    return rows
}
export const addUserModel=async(name,email,password)=>{
    const [rs]=await db.query("INSERT INTO user (name,email,password) VALUES (?,?,?)",[name,email,password])
    return rs
}
export const deleteUserModel=async(id)=>{
    const [del]=await db.query("DELETE FROM user WHERE id=?",[id])
    return del;
}
export const editUserModel=async(id,name,email,password)=>{
    const [edit]=await db.query("UPDATE user SET name=?,email=?,password=? WHERE id=?",[name,email,password,id])
    return edit;
}
