const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BookTrips = new Schema({
  name: {
    type: String
  },
  wheel: {
    type: Number
  },
  capacity: {
    type: String
  },

  price: {
    type: Number
  },
  imgurl: {
    type: String
  },

}, {
  collection: 'BookTrips'
})

module.exports = mongoose.model('BookTrips', BookTrips)
