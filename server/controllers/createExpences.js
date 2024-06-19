const expanses = require("../models/userExpenses");
const User= require("../models/user")
const createExp=async(req,res)=>{
    try{
        const{user,cost,desc,expanseDate,tittle,detail}=req.body;
        const userExpance = await expanses.create({
            detail:detail,
            user:user,
            cost:cost,
            desc:desc,
            expanseDate:expanseDate,
            tittle:tittle,
        });
        const updateUser = await User.findByIdAndUpdate(user,{$push: {expenses:userExpance._id}}, {new:true}).populate("expenses").exec();
        res.status(200).json({
            success:true,
            message:"expanse created",
            user:updateUser
        });
    }catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message:"expanse not created"
        });
    }
}
const deleteExp=async(req,res)=>{
    try{
        const {user,expenses_id} = req.body;
        const deletedExp = await expanses.findOneAndDelete({_id:expenses_id});
        const updateUser = await User.findByIdAndUpdate(user,{$pull: {expenses:deletedExp._id}}, {new:true});
        res.status(200).json({
            success:true,
            user:updateUser,
            deletedExp,
            message:"expanse deleted"
        });
    }catch(err){
        res.status(500).json({
            success:false,
            message:"expanse not deleted"
        });
    }     
}

const getAll=async(req,res)=>{
    try{
        const {id}=req.body;
        const user = await User.findById(id).populate("expenses").exec();
        res.status(200).json({
            success:true,
            user:user
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message:"user not deleted"
        })
    }
}
const editExp=async(req,res)=>{
    try{
        const {user,cost,desc,expanseDate,tittle,detail,expenses_id} = req.body;
        
        const editexp = await expanses.findByIdAndUpdate(expenses_id,{user,cost,desc,expanseDate,tittle,detail});
        //const updateUser = await User.findByIdAndUpdate(user,{$pull: {expenses:deletedExp._id}}, {new:true});
        res.status(200).json({
            success:true,
            editexp,
            message:"expanse updated"
        });
    }catch(err){
        res.status(500).json({
            success:false,
            message:"expanse not updated"
        });
    }
    
     
}

const filterExp =async()=>{
     try{
        const {values}=req.body;
        const user = await expanses.find({
            expanseDate: {
                $gte: values[0],
                $lt: values[1]
              }
        }).populate("expenses").exec();
        res.status(200).json({
            success:true,
            user:user
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message:"user not deleted"
        })
    }
}


module.exports={createExp,deleteExp,getAll,editExp};