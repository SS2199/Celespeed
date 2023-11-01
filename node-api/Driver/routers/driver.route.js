const express = require('express');
const app = express();
const driverRoute = express.Router();
let DriverModel = require('../model/Driver');


driverRoute.route('/').get((req, res) => {
  DriverModel.find((error, driver) => {
    if (error) {
      return next(error)
    } else {
      res.json(driver)
      console.log('driver retrieved!')
    }
  })
})


driverRoute.route('/create-driver').post((req, res, next) => {
  DriverModel.create(req.body, (err, driver) => {
    if (err) {
      return next(err)
    } else {
      res.json(driver)
      console.log('Driver created!')
    }
  })
});


driverRoute.route('/fetch-driver/:id').get((req, res) => {
  DriverModel.findById(req.params.id, (err, driver) => {
    if (err) {
      return next(err)
    } else {
      res.json(driver)
      console.log('Driver retrieved!')
    }
  })
})


driverRoute.route('/update-booktrips/:id').put((req, res, next) => {
  DriverModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (err, driver) => {
    if (err) {
      return next(err);
    } else {
      res.json(driver)
      console.log('Doctor updated!')
    }
  })
})

driverRoute.route('/delete-booktrips/:id').delete((req, res, next) => {
  DriverModel.findByIdAndRemove(req.params.id, (error, driver) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: driver
      })
      console.log('Trips deleted!')
    }
  })
})

module.exports = driverRoute;
