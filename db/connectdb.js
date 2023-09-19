const mongoose = require('mongoose')

const connectdb = mongoose.connect("mongodb://127.0.0.1/CRUDDATABASE")
.then((req,res)=>console.log("Now You Are Connected Databse"))
.catch((req,res)=>console.log("Something Went Wrong"))


module.exports=connectdb  
