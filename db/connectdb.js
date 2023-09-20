const mongoose = require('mongoose')

const connectdb = mongoose.connect("mongodb+srv://aamir:jtXrWaePu2aZx4Qz@cluster0.ktyehk8.mongodb.net/")
.then((req,res)=>console.log("Now You Are Connected Databse"))
.catch((req,res)=>console.log("Something Went Wrong"))


module.exports=connectdb  
