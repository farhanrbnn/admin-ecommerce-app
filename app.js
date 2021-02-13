// import package

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const app = express()

dotenv.config()

// middleware

app.use(bodyParser.json({ limit: '1mb' }))
app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }))

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

app.use('/', (req, res) => {
	res.send('hello world')
})

app.listen(5001, () => {
	console.log('server listening')
})