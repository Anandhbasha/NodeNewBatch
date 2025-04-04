import mongoose from "mongoose"
let db;
const Database = (URI)=>{
    try {
        mongoose.connect(URI)
        db = mongoose.connection;
       db.once("open",()=>{
        console.log("Db is Connected");        
       })
    } catch (error) {
        console.log(error);        
    }
}
const getdb = ()=>db
export {Database,getdb}