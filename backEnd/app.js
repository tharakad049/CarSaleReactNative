const express = require('express')
const mongoose = require('mongoose')
const port = 8900

const vehicle = require('./routes/vehicles')
const user = require('./routes/users')

const app = express()


const url = 'mongodb://localhost/CarSale'
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4
}

mongoose.connect(url, options, { useNewUrlParser: true })
const con = mongoose.connection

con.on("open", () => {
    console.log('MongoDB connected!');
})

app.use(express.json())
app.use('/users', user)
app.use('/vehicles', vehicle)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})