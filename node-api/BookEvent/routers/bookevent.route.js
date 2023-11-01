const express = require('express');
const app = express();
const bookeventRoute = express.Router();
let BookEventModel = require('../model/BookEvent');


bookeventRoute.route('/').get((req, res) => {
  BookEventModel.find((error, bookevent) => {
    if (error) {
      return next(error)
    } else {
      res.json(bookevent)
      console.log('Doctors retrieved!')
    }
  })
})


bookeventRoute.route('/create-bookevent').post((req, res, next) => {
  BookEventModel.create(req.body, (err, bookevent) => {
    if (err) {
      return next(err)
    } else {
      res.json(bookevent)
      console.log('Doctor created!')
    }
  })
});


bookeventRoute.route('/fetch-bookevent/:id').get((req, res) => {
  BookEventModel.findById(req.params.id, (err, bookevent) => {
    if (err) {
      return next(err)
    } else {
      res.json(bookevent)
      console.log('Doctor retrieved!')
    }
  })
})


bookeventRoute.route('/update-bookevent/:id').put((req, res, next) => {
  BookEventModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (err, bookevent) => {
    if (err) {
      return next(err);
    } else {
      res.json(bookevent)
      console.log('Doctor updated!')
    }
  })
})

bookeventRoute.route('/delete-bookevent/:id').delete((req, res, next) => {
  BookEventModel.findByIdAndRemove(req.params.id, (error, bookevent) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: bookevent
      })
      console.log('Doctor deleted!')
    }
  })
})

module.exports = bookeventRoute;
