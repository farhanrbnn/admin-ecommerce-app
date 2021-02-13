// import package

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const app = express()

dotenv.config()

// define vue app url 
const corsOption = {
	origin: 'http://localhost:8080'
}

// middleware

app.use(bodyParser.json({ limit: '1mb' }))
app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }))

const adminRoute = require('./routes/adminRoute')

// db connection
mongoose.connect(process.env.DB_CONNECT, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
.then(() => {
	console.log('dbconnected')
})
.catch((err) => {
	console.log(err)
})

// routes
app.use('/', adminRoute)

app.listen(5001, () => {
	console.log('server listening')
})