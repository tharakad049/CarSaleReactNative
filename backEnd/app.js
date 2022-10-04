const express = require('express')
const app = express()
const port = 4000

const vehicle = require('./routes/vehicles')
const users = require('./routes/users')

app.use(express.json())

app.use('/vehicle', vehicle)
app.use('/users', users)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})