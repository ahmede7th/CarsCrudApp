const express = require('express')
const carRoutes = express.Router()
const carsController = require('../controllers/carsController')
// const postsController = require('../controllers/forumController')
// const views = require('../controllers/viewsController')

// carRoutes.get('/:id',carsController.show)
carRoutes.put('/:id',carsController.update)

carRoutes.get('/car-one',(req,res)=>{
  res.render('cars/car-one',{})
})


carRoutes.get('/',carsController.index)
carRoutes.post('/',carsController.create)


module.exports = carRoutes;
