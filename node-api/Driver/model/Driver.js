const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Driver = new Schema({
  name: {
    type: String
  },
 
  imgurl: {
    type: String
  },

}, {
  collection: 'Driver'
})

module.exports = mongoose.model('Driver', Driver)
