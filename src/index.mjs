import express, { response } from "express";
import  db from '../db.js';

const app = express()
app.use(express.json());
app.get('/', (req, res) => {
    res.set('Cache-Control', 'no-store');
    res.status(200).json({
        msg: "hello"
    })
})
app.get('/api/users', (req, res) => {
    db.query("SELECT * FROM user",(err,result)=>{
        if(err){
            return res.status(500).json({
                msg:'errror',
                err:err
            })
        }else{
            res.json({
                msg:'get successfully',
                data:result
            })
        }
    })
})
app.post('/api/addUser',(req,res)=>{
    const {name,email,password}=req.body;
    if (!name || !email || !password){
        return res.json({
            msg:'all field are required',
            status:400
        })
    }else{
        const insert='INSERT INTO user (name,email,password) VALUES (?,?,?)';
        db.query(insert,[name,email,password],(err,result)=>{
            if(err){
                return res.json({
                    msg:'can not add user',
                    error:err
                })
            }else{
                res.json({
                    msg:'created',
                    status:201,
                    userId:result.insertId,
                })
            }
        })
    }
})
app.delete('/api/deleteUser/:id',(req,res)=>{
    const id=req.params.id;
    if(!id){
        res.json({
            msg:'id is required',
            status:400
        })
    }
    const sql="DELETE FROM user WHERE id=?"
    db.query(sql,[id],(err,result)=>{
        if(err){
            return res.json({
                msg:'can not delete',
                error:err
            })
        }else{
            return res.json({
                msg:'delete successfully',
                status:200,
            })
        }
    }) 
})
app.patch('/api/editUser/:id',(req,res)=>{
    const id=req.params.id;
    const {name,email,password}=req.body;
    const sql="UPDATE user SET name=?, email=?, password=?";
    db.query(sql,[id,name,email,password],(err,result)=>{
        if(err){
            return res.json({
                msg:'can not edit',
                error:err
            })
        }else{
            return res.json({
                msg:'edited successfully',
                status:200,
            })
        }
    })
})
const port = 3000
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})