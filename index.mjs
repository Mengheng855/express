import express from 'express'
import  cors from 'cors'
import { router } from './routes/user.mjs'
const app=express()
app.use(express.json())
app.use(cors())
app.use(cors({
    origin: 'http://127.0.0.1:5500',
    methods: ['GET','POST','PATCH','DELETE','PUT'],
    allowedHeaders: ['Content-Type']
}))
app.use('/',router)
app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000");
})