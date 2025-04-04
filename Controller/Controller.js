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
export const edit = async (req, res) => {
    try {
        const db = getdb();
        const { productName } = req.params;
        const { productPrice } = req.body;
        const updatedData = await db.collection('NewTable').updateOne(
            { productName: productName },
            { $set: { productPrice } });
        if (updatedData.matchedCount === 0) {
            return res.status(404).json({ message: "Product not found" });}

        res.status(200).json({ message: "Product updated successfully", data: updatedData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while updating the product", error: error.message });
    }
}

export const deleteUser = async(req,res)=>{
    try {
        const db = getdb();
        const { productName } = req.params;
        const DeleteData = await db.collection('NewTable').deleteOne({productName})
        res.status(200).json({ message: "Product Deleted successfully", data: DeleteData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while Deleted the product", error: error.message });
    }
}