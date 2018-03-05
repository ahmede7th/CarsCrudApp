const express = require('express')
const carRoutes = express.Router()
const carsController = require('../controllers/carsController')

carRoutes.get('/',carsController.index)
carRoutes.post('/',carsController.create)
carRoutes.get('/search',(req,res)=>{
  res.render('cars/search',{})
})

carRoutes.get('/:id',carsController.show)
carRoutes.put('/:id',carsController.update)

carRoutes.get('/car-one',(req,res)=>{
  res.render('cars/car-one',{})
})



module.exports = carRoutes;
