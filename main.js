import express from 'express'
import route from './Route/Router.js'
const app = express()
const PORT =3200
app.use(express.json())
app.use(route)

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);    
})
