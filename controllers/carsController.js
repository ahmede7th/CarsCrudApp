const car = require('../models/car.js')
const carController = {}

    carController.index=(req,res) =>{
    console.log('getting all cars')
    car.findAll().then((car)=>{
      res.render('cars/benz',{
        data:car
      })
    }).catch((err)=>{
      console.log(err)
      res.status(500).json(err)
    })
  }

  carController.create =(req,res)=>{
    car.create({
      name: req.body.name,
      num: req.body.num
    }).then(car=>{
      res.send(car)
    }).catch((err)=>{
      console.log(err)
      res.status(500).json(err)
    })
  }


carController.show=(req,res)=>{
    res.render('cars/car-one',{
      data:car
    })
  }


carController.update=(req,res)=>{
  console.log(req.body)
  car.update({
    name: req.body.name,
    num: req.body.num
  }).then(car=>{
    car.findById(req.params.id).then(car=>{
      res.render('cars/car-one'),{
        data:car
      }
    })
  })
  console.log('updating car cuzzzz')
}

module.exports = carController
