const express = require('express')
const carRoutes = express.Router()
const carsController = require('../controllers/carsController')


carRoutes.get('/',(req,res)=>{
  res.json({
    message:"ok"
  })
})

carRoutes.get('/')





// carRoutes.post('/',carsController.create)
// carRoutes.get('/add',)

module.exports = carRoutes;
