const user = require("../models/user");


const sinup=async(req,res)=>{
    try{
        const {email,password}= req.body;
        const Createuser= await user.create({
            email:email,
            password:password
        });
        Createuser.password="";
    
        res.status(200).json({
            sucess:true,
            user:Createuser,
            message:"user created"
        });
    }catch(err){
        console.log("error in sinup controller found "+ err);
        res.status(500).json({
            sucess:flase,
            user:"something went wrong"
        });
    }
}

module.exports = {sinup};