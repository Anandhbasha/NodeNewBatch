export const read = (req,res)=>{
    res.send("Node is Working")
}
export const insert = (req,res)=>{
    const{userName,password} = req.body
    res.send(`${userName}Login Sucessfully`)
}
export const edit = (req,res)=>{
    const {userNumber} = req.body;
    res.json(`${userNumber} userNumber sucessfully changed`)
}
export const deleteUser = (req,res)=>{
    res.json("User Deleted Sucessfully")
}