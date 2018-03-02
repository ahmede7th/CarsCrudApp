const express = require('express')
const carRoutes = express.Router()
const carsController = require('../controllers/carsController')

carRoutes.get('/',carsController.index),
carRoutes.get('/search',(req,res)=>{
  res.render('cars/search',{})
})




module.exports = carRoutes;
