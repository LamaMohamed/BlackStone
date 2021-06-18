const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Car = new Schema({
    model:{
    type:String
  },
    brand:{
      type:String
  },
    plate:{
    type:String
  },
    employee: {
    type:mongoose.Schema.Types.ObjectId
  },
     accessCard:{
        type:mongoose.Schema.Types.ObjectId
     }
  
}, {
  collection: 'Car'
})

module.exports = mongoose.model('Car', Car)