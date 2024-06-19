const express = require("express");
const app =express();
const dotenv= require("dotenv");
const cors=require("cors");
const dbconnect = require("./config/dbconnect");
dotenv.config();
app.use(express.json());
app.use(cors());
const router= require("./router/routes");
app.use("/itm/happyhacking/",router);
dbconnect();
const PORT = process.env.PORT || 8080;
app.get("/",(req,res)=>{
    res.send(`<h1>hello server on ${PORT}</h1>`);
});

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})
