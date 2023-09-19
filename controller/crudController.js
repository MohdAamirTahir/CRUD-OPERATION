const crudModel = require('../model/crudModel')
const CrudSchema = require('../model/crudModel')
const crudeUser = require('../model/crudModel')

//get data froma table
const getAllDocs = async(req,res) =>{
try{
   const result =await crudModel.find()
   res.render("index",{data:result})
}catch(err){
    console.log(err)
}
}
const createDocs = async(req,res) =>{
    try{
        const savedata = await CrudSchema({
           name:req.body.name,
           age:req.body.age,
           fees:req.body.fees
        })
        const complete =await savedata.save()
        if(complete){

         res.redirect("/")
        }
    }catch(err){
        console.log(console.error())
    }
}
const editDocs = async(req,res) =>{
   try{
     const result = await crudModel.findById(req.params.id)
     res.render("edit",{data:result})
   }catch(err){

   }
   res.render("edit")
}
const updateDocs = async(req,res) =>{
     try{
        //isme id leni h or jo body main a raha h use update karana h
    const result = await crudModel.findByIdAndUpdate(req.params.id, req.body)
    if(result){
        res.redirect("/")
    }
     }catch(error){
      console.log(error)
     }
}
const deleteDocs = async(req,res) =>{
    try{
      const result = await crudModel.deleteByIdAndDelete(req.params.id)
      if(result){
        res.redirect("/")
      }
    }catch(err){
        console.log(console.error())
    }
}


module.exports = {
    getAllDocs,
    createDocs,
    editDocs,
    updateDocs,
    deleteDocs
}