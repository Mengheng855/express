/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */  
import {  addUserModel, deleteUserModel, editUserModel, getUserModel } from '../models/userModel.mjs'
export const home=(req,res)=>{
    return res.json({
        msg:"welcome to kat jerng",
        status:200,
    })
}
export const getUser=async(req,res)=>{
    try {
        const data=await getUserModel();
        return res.json({
            msg:'success',
            status:200,
            data:data
        })
    } catch (error) {
        return res.json({
            msg:error
        })
    }
}
export const addUser=async(req,res)=>{
    try {
        const {name,email,password}=req.body
        const result=await addUserModel(name,email,password)
        return res.json({
            msg:'created',
            status:201,
            
        })
    } catch (error) {
         return res.json({
            msg:error,
            status:500
        })
    }
}
export const deleteUser= async(req,res)=>{
    try {
        const {id}=req.params;
        if(!id){
            return res.json({
                msg:"huj na id??"
            })
        }
        const rs=await deleteUserModel(id);
        return res.json({
            msg:"delete successfully",
            status:200,
        })
    }catch(error){
        return res.json({
            msg:error
        })
    }
}
export const editUser=async(req,res)=>{
    try{
        const {id}=req.params;
        const {name,email,password}=req.body
        if(!id){
            return res.json({
                msg:"huj na id"
            })
        }
        const edit=await editUserModel(name,email,password,id)
        return res.json({
            msg:"edited successfully",
            status:200,
        })
    }catch(error){
        return res.json({
            msg:error
        })
    }
}
