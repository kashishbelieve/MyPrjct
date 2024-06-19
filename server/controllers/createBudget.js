const User = require('../models/user');


const createBudget=async(req,res)=>{
    try{
        const {budget,budgetstart,budgetend,id}= req.body;
        
        const newBudget = await User.findByIdAndUpdate({_id:id},{
            budget:budget,
            budgetstart:budgetstart,
            budgetend:budgetend
        })
        res.status(200).json({
            success:true,
            newBudget,
            message:"cretaed new budget"
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message:`in create budget ${err}`
        })
    }
}

module.exports= {createBudget};