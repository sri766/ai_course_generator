const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({path:'./config.env'});


require('./db/connection')


const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})