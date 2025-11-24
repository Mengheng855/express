import express from 'express'
import { addUser, deleteUser, editUser, getUser, home } from '../controllers/UserController.mjs'

export const router=express.Router()
router.get('/',home)
router.get('/getUser',getUser)
router.post('/addUser',addUser)
router.delete('/deleteUser/:id',deleteUser)
router.patch('/editUser/:id',editUser)