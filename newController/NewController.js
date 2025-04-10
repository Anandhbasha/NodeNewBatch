import newModel from "../model/Model.js"
import bcrypt from "bcryptjs"       
import jwt from 'jsonwebtoken'

export const verifyToken = (req,res,next) => {
    const authHeader = req.headers["authentication"];
    if(!authHeader){
        res.status(404).json("Access denied")
    }
    const token = authHeader.split("")[1];
    const decoded = jwt.verify(token,"abcdef")
    req.user = decoded
    next()
}

export const register_Users =async(req,res)=>{
    try {
        const {userName,email,password}=req.body
        const exist_User = await newModel.findOne({email})
        if(exist_User){
            res.status(402).json("User  already exists")
        }
        const Salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,Salt)
        const addNewuser = await newModel({
            userName:userName,
            email:email,
            password:hashedPassword
        })
        await addNewuser.save()
        res.status(201).json({ message: "User registered successfully",password:hashedPassword});
    } catch (error) {
        res.status(404).json({errormessage:error})
    }
}

export const login_user = async(req,res) =>{
    try {
        const {email,password} = req.body
        const existed_user = await newModel.findOne({email})
        if(!existed_user){
            res.status(404).json("User not found");
        }
        const match_password = await bcrypt.compare(password,existed_user.password)
        if(!match_password){
            res.status(404).json("Password is wrong")
        }
        // if(existed_user.matchcount === 0){
        //Install and import jsonwebtoken (npm i jsonwebtoken) 
        const token = jwt.sign({email},"abcdef",{expiresIn:'1h'})
        res.status(202).json({token,data:{Name:existed_user.userName,email:existed_user.email}})
        // }
    } catch (error) {
        res.status(500).json(error)
    }
}