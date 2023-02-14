const express = require("express");
const cors=require("cors");
const Deposit=require("./connectDB")
const app= express();
app.use(express.json());
app.use(express.urlencoded({extended :true}))
app.use(cors())

 app.get("/",cors(),(req,res)=>{

 })
 app.post("/",cors(),async (req,res)=>{
    const {address, money}=req.body;
    const data={
        address:address,
        balance:money
    }
    try {
        const check= await Deposit.findOne({address:address})
        if(check){
            res.send('exists')
            await Deposit.updateOne({ $inc: {balance: money }})
        }
        else{
            res.send('Not exists')
            await Deposit.insertMany([data]);
        }
    }catch(e){
        console.log(e);
    }
 })
app.listen(8000, function() {
    console.log("Server started on port 8000");
  });