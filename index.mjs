import express from "express"
import { router } from "./routes/product.mjs"
const app=express()
app.use('/',router)
const port=3000
app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})