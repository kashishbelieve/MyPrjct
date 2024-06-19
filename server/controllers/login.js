
const user1 = require("../models/user");
const login= async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user = await user1.findOne({email,password}).populate("expenses").exec();
        console.log(user);
        if(!user){
            return res.status(400).json({
                success:false,
                message:"enter correct details"
            });
        };
        user.password="";
        res.status(200).json({
            success:true,
            user:user
        });
    }catch(err){
        console.log("error in login controller found"+ err);
        res.status(500).json({
            success:false,
            message:"error have been found"
        })
    }
}

module.exports={login};