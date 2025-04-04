import express from 'express'
import { deleteUser, edit, insert, read } from '../Controller/Controller.js'
const route = express.Router()
//read method
route.get('/',read)
//insert new data
route.post('/',insert)
//edit
route.put('/edit/:productName',edit)
//delete
route.delete('/delete/:productName',deleteUser)
export default route