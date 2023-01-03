const express = require('express')
const mongoose = require('mongoose')
const rout = require('./router/rout.js')
const dotenv = require('dotenv')

dotenv.config({ path: '../config/.env' })

const app = express()

mongoose.connect(process.env.DB_URL).then(_ => console.log('DB connect')).catch(err => console.log(err))

app.use(express.json())

app.use('/', rout)



app.listen(process.env.PORT, _ => console.log('server running'))