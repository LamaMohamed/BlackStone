const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let AccessCard = new Schema({
    credit:{
    type:Number
  },
    charged:{
      type:Number
  },
   
}, {
  collection: 'AccessCard'
})

module.exports = mongoose.model('AccessCard', AccessCard)