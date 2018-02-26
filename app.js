const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
const carsRoutes = require('./routes/carsRoutes')
const methodOverride = require('method-override')
const app = express()
const port = process.env.PORT || 3000




app.set('views',path.join(__dirname,`views`))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(methodOverride('_method'))
app.use('/cars',carsRoutes)



app.get(`/`,(req, res)=>{
  res.render('index',{
    heading: 'Welcome to the cars app!'
  })
})

app.get(`*`,(req,res)=>{
  res.status(404).send('404 not found')
})



app.listen(port, ()=>{
  console.log(`Server is up on port: ${port}`);
})
