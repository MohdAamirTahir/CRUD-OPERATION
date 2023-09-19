const mongoose = require('mongoose')
const CrudSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    fees:{
        type:mongoose.Decimal128,
        required:true
    }
})

module.exports=mongoose.model('CRUDTABLE',CrudSchema)