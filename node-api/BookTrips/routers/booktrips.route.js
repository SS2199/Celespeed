const express = require('express');
const app = express();
const booktripsRoute = express.Router();
let BookTripsModel = require('../model/BookTrips');


booktripsRoute.route('/').get((req, res) => {
  BookTripsModel.find((error, booktrips) => {
    if (error) {
      return next(error)
    } else {
      res.json(booktrips)
      console.log('Trips retrieved!')
    }
  })
})


booktripsRoute.route('/create-booktrips').post((req, res, next) => {
  BookTripsModel.create(req.body, (err, booktrips) => {
    if (err) {
      return next(err)
    } else {
      res.json(booktrips)
      console.log('Trips created!')
    }
  })
});


booktripsRoute.route('/fetch-booktrips/:id').get((req, res) => {
  BookTripsModel.findById(req.params.id, (err, booktrips) => {
    if (err) {
      return next(err)
    } else {
      res.json(booktrips)
      console.log('Trips retrieved!')
    }
  })
})


booktripsRoute.route('/update-booktrips/:id').put((req, res, next) => {
  BookTripsModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (err, booktrips) => {
    if (err) {
      return next(err);
    } else {
      res.json(booktrips)
      console.log('Doctor updated!')
    }
  })
})

booktripsRoute.route('/delete-booktrips/:id').delete((req, res, next) => {
  BookTripsModel.findByIdAndRemove(req.params.id, (error, booktrips) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: booktrips
      })
      console.log('Trips deleted!')
    }
  })
})

module.exports = booktripsRoute;
