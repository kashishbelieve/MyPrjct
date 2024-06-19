const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema(
  {
    Name: {
        type:String,
        
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    expenses:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"UserExpenses"
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now(),
        required:true
    },
    upadtedAt:{
        type:Date,
        default:Date.now(),
        required:true
    },
    budget:{
        type:Number,
        default:0,
    },
    budgetstart:{
        type:Date,
    },
    budgetend:{
        type:Date,
    }

  }
);
module.exports= mongoose.model('User', UserSchema);
