const express = require('express')
const app = express()
const port = 8900
const mongoose=require('mongoose')

const vehicle = require('./routes/vehicles')
const users = require('./routes/users')

app.use(express.json())

app.use('/vehicle', vehicle)
app.use('/users', users)

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

mongoose.connect(options)

const con=mongoose.connection
con.on("open",()=>{
    console.log('MongoDB connected !')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})