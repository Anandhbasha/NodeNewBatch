
import prodModel from "../model/Model.js";

export const read = async(req,res)=>{
    try {
       
        const product = await prodModel.find()
        res.status(200).json(product)
    } catch (error) {
        res.status(402).json(`Unable the Read the product information${error}`)
    }
    
}
export const insert = async(req,res)=>{
    try {
       
        const{prodCat,productName} = req.body
        const InsertNew_Product = await prodModel.findOne({ prodCat,
            productName})
            if(InsertNew_Product){
                res.status(402).json ("Data already exists!!")
            }
            const exist_Data=await prodModel.InsertNew_Product.save()
            res.status(200).json({
            userInfo:{exist_Data},
            message:"New prodcut inserted Sucessfully"
        })
    } catch (error) {
        res.status(404).json(`Unable the Insert the product information${error}`)
    }
}
export const edit = async (req, res) => {
    try {
        const { productName } = req.params;
        const { productPrice } = req.body;
        const updatedData = await prodModel.findOneAndUpdate(
            { productName: productName },
            { $set: { productPrice } });
        if (!updatedData.matchedCount === 0) {
            return res.status(404).json({ message: "Product not found" });}

        res.status(200).json({ message: "Product updated successfully", data: updatedData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while updating the product", error: error.message });
    }
}

export const deleteUser = async(req,res)=>{
    try {   
        const { productName } = req.params;
        const DeleteData = await prodModel.deleteOne({productName})
        res.status(200).json({ message: "Product Deleted successfully", data: DeleteData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while Deleted the product", error: error.message });
    }   
}