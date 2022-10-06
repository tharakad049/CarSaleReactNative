const express = require('express')
const mongoose = require('mongoose')
const port = 4000

// const customer = require('./routes/customer')
//const user = require('./routes/user')

const app = express()


const url = 'mongodb://localhost/CarSale'
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
}

mongoose.connect(url, options, { useNewUrlParser: true })
const con = mongoose.connection

con.on("open", () => {
    console.log('MongoDB connected!');
})

app.use(express.json())

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})