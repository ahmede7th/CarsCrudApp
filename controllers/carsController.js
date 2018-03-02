const car = require('../models/car')
const carController = {}

carController.index=(req, res)=>{
  console.log('carController.index findAll()')
  car.findAll().then((benz)=>{
    res.render('cars/benz',{
      data:benz
    })
  }).catch((err)=>{
    console.log("ERROR")
    console.log(err)
    res.status(500).json(err)
  })
}


module.exports = carController
