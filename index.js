const express=require('express')
const path = require("path")
const cors=require('cors')
const {mongoose}=require('./config/database')
const app=express()

   
    
    


// 1st appoach
const router=require('./config/route')
//2nd approach
const categoriesRouter=require('./app/controllers/categoriesController')
const tagRouter=require('./app/controllers/tagController')
const {usersRouter}=require('./app/controllers/usersController')

app.use(express.json())
app.use(cors())

app.use('/', router)
app.use('/users', usersRouter)
app.use('/tags',tagRouter) //1st approach map here
app.use('/categories',categoriesRouter) //2nd approach map up here
app.use('/categories/:id',categoriesRouter)

const port = process.env.PORT || 3001
     app.use(express.static(path.join(__dirname,"notes-client/build")))


	app.get("*",(req,res)=>{
    		res.sendFile(path.join(__dirname + "/notes-client/build/index.html"))
	})


app.get('/', (req,res)=>{
    res.send('welcome to my note taking app')
})

app.listen(port,()=>{
    console.log('listening to port',port)
})
