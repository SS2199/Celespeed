const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BookEvent = new Schema({
  name: {
    type: String
  },
  pickup: {
    type: String
  },
  hdrop: {
    type: String
  },
  weight: {
    type:  String
  },
  phone: {
    type: Number
  },
  
}, {
  collection: 'BookEvent'
})

module.exports = mongoose.model('BookEvent', BookEvent)
