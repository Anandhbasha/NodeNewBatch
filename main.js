import express from 'express'
import route from './Route/Router.js'
import {Database} from './Database/Database.js'
const app = express()
const PORT =3200
app.use(express.json())
Database("mongodb://127.0.0.1:27017/Newone")
app.use('/crud',route)

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);    
})
