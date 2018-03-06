const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
const carsRoutes = require('./routes/carsRoutes')
const forumRoutes = require('./routes/forumRoutes')
const methodOverride = require('method-override')
const app = express()
const PORT = process.env.PORT || 3000;




app.set('views',path.join(__dirname,`views`))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(methodOverride('_method'))
app.use('/benz',carsRoutes)
app.use('/forum',forumRoutes)


app.get(`/`,(req, res)=>{
  res.render('index',{
    title: "Cars Crud App",
    heading: 'Welcome to the cars app!',
    subheading: "It's a car search app.",
    showAuthors:true,
    authors:[`Muhammad Ahmed`]
  })
});

app.get(`*`,(req,res)=>{
  res.status(404).send('404 NOT FOUND *')
})



app.listen(PORT, ()=>{
  console.log(`Server is up on port: ${PORT}`);
})
