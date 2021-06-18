const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Employee = new Schema({
    name:{
    type:String
  },
    position:{
      type:String
  },
    plate:{
    type:Date
  },

  age:{
      type:Number
  }
  
}, {
  collection: 'Employee'
})

module.exports = mongoose.model('Employee', Employee)