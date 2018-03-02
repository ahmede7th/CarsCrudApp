const express = require('express')
const carRoutes = express.Router()
const carsController = require('../controllers/carsController')

carRoutes.get('/',(req,res)=>{
  res.render('forum/forum')
})


module.exports = carRoutes;
