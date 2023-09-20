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
    fees: {
        type: mongoose.Decimal128,
        required: [true, 'Fees are required'],
        validate: {
          validator: function (value) {
            return value > 0;
          },
          message: 'Fees must be greater than 0.',
        },
      },
})

module.exports=mongoose.model('CRUDTABLE',CrudSchema)