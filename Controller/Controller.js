import { getdb } from "../Database/Database.js"

export const read = async(req,res)=>{
    try {
        const db = getdb();
        const product = await db.collection("NewTable").find().toArray();
        res.status(200).json(product)
    } catch (error) {
        res.status(402).json(`Unable the Read the product information${error}`)
    }
    
}
export const insert = async(req,res)=>{
    try {
        const db = getdb();
        const{userName,password} = req.body
        const InsertNew_Product = await db.collection("NewTable").insertOne({userName,password});
        res.status(201).json({
            userInfo:{userName,password},
            message:"New prodcut inserted Sucessfully"
        })
    } catch (error) {
        res.status(402).json(`Unable the Insert the product information${error}`)
    }
}
export const edit = (req,res)=>{
    const {userNumber} = req.body;
    res.json(`${userNumber} userNumber sucessfully changed`)
}
export const deleteUser = (req,res)=>{
    res.json("User Deleted Sucessfully")
}