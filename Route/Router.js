import express from 'express'
import { deleteUser, edit, insert, read } from '../Controller/Controller.js'
import { login_user, register_Users, verifyToken } from '../newController/NewController.js'
const route = express.Router()
//read method
route.get('/',read)
//insert new data
route.post('/',insert)
//edit
route.put('/edit/:productName',edit)
//delete
route.delete('/delete/:productName',deleteUser)
//register
route.post('/register',register_Users)
//login
route.post('/login',login_user)

route.post('/token',verifyToken)
export default route