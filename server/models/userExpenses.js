const mongoose = require("mongoose");

const UserExpensesSchema = mongoose.Schema(
  {
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    tittle:{
      type:String,
    },
    cost:{
        type:Number,
        required:true
    },
    desc:{
        type:String,
    },
    detail:{
      type:String
    },
    expanseDate:{
        type:Date,
        default:Date.now()
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now()
    }
    
  }
);

module.exports= mongoose.model('UserExpenses', UserExpensesSchema);
