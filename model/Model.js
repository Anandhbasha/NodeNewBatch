import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName:String,
    email:String,
    password:String
})

const newModel = mongoose.model("newModels",userSchema,"register_User")

 

// const prodcutschema = new mongoose.Schema({
//     //prodCat:{type:String,new:true,required},
//     prodCat:String,
//     productName:String,
//     productPrice:String,
//     productDesrc:String
// })

// const prodModel = mongoose.model("prodModels",prodcutschema,"NewTable")

export default newModel 