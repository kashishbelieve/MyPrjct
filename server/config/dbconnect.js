const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const dbconnect = ()=>{
    
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(response=>{
        console.log('MongoDB Connection Succeeded.')
    }).catch(error=>{
        console.log('Error in DB connection: ' + error);
        process.exit(1);
    });
}
module.exports=dbconnect;




