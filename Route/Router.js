import express from 'express'
import { Delete, deleteUser, edit, Insert, insert, read, update } from '../Controller/Controller.js'
import { login_user, register_Users, verifyToken } from '../newController/NewController.js'
const route = express.Router()
//read method
route.get('/read',read)
//insert new data
route.post('/',insert)
route.post('/insert',Insert)
//edit
route.put('/edit/:productName',edit)
route.put('/update/:productName',update)
//delete
route.delete('/delete/:productName',Delete)
route.delete('/delete/:productName',deleteUser)
//register
route.post('/register',register_Users)
//login
route.post('/login',login_user)

route.post('/token',verifyToken)
export default route