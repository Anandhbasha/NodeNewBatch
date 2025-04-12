
// import prodModel from "../model/Model.js";

import prodModel from "../model/Model.js"

// export const read = async(req,res)=>{
//     try {
       
//         const product = await prodModel.find()
//         res.status(200).json(product)
//     } catch (error) {
//         res.status(402).json(`Unable the Read the product information${error}`)
//     }
    
// }
// export const insert = async(req,res)=>{
//     try {
       
//         const{prodCat,productName} = req.body
//         const InsertNew_Product = await prodModel.findOne({ prodCat,
//             productName})
//             if(InsertNew_Product){
//                 res.status(402).json ("Data already exists!!")
//             }
//             const exist_Data=await prodModel.InsertNew_Product.save()
//             res.status(200).json({
//             userInfo:{exist_Data},
//             message:"New prodcut inserted Sucessfully"
//         })
//     } catch (error) {
//         res.status(404).json(`Unable the Insert the product information${error}`)
//     }
// }
// export const edit = async (req, res) => {
//     try {
//         const { productName } = req.params;
//         const { productPrice } = req.body;
//         const updatedData = await prodModel.findOneAndUpdate(
//             { productName: productName },
//             { $set: { productPrice } });
//         if (!updatedData.matchedCount === 0) {
//             return res.status(404).json({ message: "Product not found" });}

//         res.status(200).json({ message: "Product updated successfully", data: updatedData });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "An error occurred while updating the product", error: error.message });
//     }
// }

// export const deleteUser = async(req,res)=>{
//     try {   
//         const { productName } = req.params;
//         const DeleteData = await prodModel.deleteOne({productName})
//         res.status(200).json({ message: "Product Deleted successfully", data: DeleteData });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "An error occurred while Deleted the product", error: error.message });
//     }   
// }




export const read = async(req,res)=>{
    try {
        const reedind_Data = await prodModel.find()
        res.status(200).json(reedind_Data)
    } catch (error) {
        return res.status(404).json({Message:"unable to read the data"})
    }
}
export const insert =async(req,res)=>{
    try {
        const{productName,productPrice,prodCat,productDesrc} = req.body;
        const check_newData = await prodModel.findOne({productName})
        if(check_newData){
            return res.status(403).json("Product is alread y exist")
        }
        const insert_newData = await prodModel.json({
            productName:productName,
            productPrice:productPrice,
            prodCat:prodCat,
            productDesrc:productDesrc
        })
        await insert_newData.save()
        return res.status(201).json(`${productName} is inserted sucessfully`)
    } catch (error) {
        return res.status(408).json(`${productName} unable to insert`)
    }
} 

export const edit = async(req,res)=>{
    try {
        const {productName} = req.params
        const {productPrice} = req.body
        const exist_Data = await prodModel.findOneAndUpdate({productName:productName},{$set:{productPrice}})
        if (!exist_Data) {
            return res.status(404).json({ message: "Product not found" });
        }            
            return res.status(201).json(`${productPrice} is Updated sucessfully`)
    } catch (error) {
            return res.status(402).json(` is Unable to Updated sucessfully`)}
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

export const Insert = async(req,res)=>{
    try {
        const {prodCat,productName,productPrice,productDesrc} = req.body
        const insert_find = await prodModel.findOne({productName})
        if(insert_find){
            res.status(202).json("User already exist")
        }
        {
        const insert_data = await prodModel.insertOne({
        prodCat:prodCat,
        productName:productName,
        productPrice:productPrice,
        productDesrc:productDesrc
        })
        const insertanything = insert_data.save()
    }
        res.status(202).json("Insert successfully")
    } catch (error) {
        res.status(500).json(error)
    }
}

export const update = async (req,res) => {
    try {
        const {productName} =  req.params
        const {productPrice,prodCat,productDesrc} = req.body
        const updatedata = await prodModel.findOneAndUpdate({productName:productName},{$set:{productPrice,prodCat,productDesrc}})
        if(!updatedata){
            res.status(404).json("Doesn't Exist")
        }
        
        res.status(202).json({message:"updated Successfully",
            data: updatedata})
    } catch (error) {
        res.status(500).json(error)
    }
}

export const Delete = async (req,res) =>{
    try {
        const {productName} = req.params
        const deletedData = await prodModel.findOneAndDelete({productName})
        if(!deletedData){
            res.status(404).json("user does not exist")
        }
        res.status(202).json("Deleted successfully")
    } catch (error) {
        res.status(500).json(error)
    }
}