const express = require('express')
const mysql = require('mysql')
const db = require('../configs/db.config')
const router = express.Router()
const connection = mysql.createConnection(db.database)

connection.connect(function (err) {
    if (err) {
        console.log(err);
    } else {
        var vehivleTable = "CREATE TABLE IF NOT EXISTS vehicle (code VARCHAR(255) PRIMARY KEY, vehicleName VARCHAR(255), vehicleImage VARCHAR(255), price DOUBLE)"
        connection.query(vehivleTable, function (err, result) {
            if (result.warningCount === 0) {
                console.log("vehicle table created");
            }
        })
    }
})
router.post('/', (req, res) => {
    const code = req.body.code
    const vehicleName = req.body.vehicleName
    const vehicleImage = req.body.vehicleImage
    const price = req.body.price
    var saveVehicleQuery = "INSERT INTO vehivle(code,vehicleName,vehicleImage,price) VALUES(?,?,?,?)";
    connection.query(saveVehicleQuery, [code, vehicleName, vehicleImage, price], (err) => {
        if (err) {
            res.send({ "message": "duplicate entry" })
        } else {
            res.send({ "message": "vehivle saved" })
        }
    })
})
router.get('/', (req, res) => {
    var getAllVehicleQuery = "SELECT * FROM vehicle";
    connection.query(getAllVehicleQuery, (err, rows) => {
        if (err) console.log(err);
        res.send(rows);
    })
})
router.get('/:code',(req,res)=>{
    const code = req.params.code
    var searchVehicleQuery = "SELECT * FROM vehicle WHERE code=?"
    connection.query(searchVehicleQuery, [code], (err, row) => {
        if (err) console.log(err);
        res.send(row);
    })
})
router.put('/', (req, res) => {
    const code = req.body.code
    const vehicleName = req.body.vehicleName
    const vehicleImage = req.body.vehicleImage
    const price = req.body.price
    var updateVehicleQuery = "UPDATE vehicle SET vehicleName=?, vehicleImage=?, price=? WHERE code=?";
    connection.query(updateVehicleQuery, [vehicleName, vehicleImage, price, code], (err, rows) => {
        if (err) console.log(err);
        if (rows.affectedRows > 0) {
            res.send({ "message": "vehicle updated" })
        } else {
            res.send({ "message": "vehicle not found" })
        }
    })
})
router.delete('/:code', (req, res) => {
    const code = req.params.code
    var deleteVehicleQuery = "DELETE FROM vehicle WHERE code=?";
    connection.query(deleteVehicleQuery, [code], (err, rows) => {
        if (err) console.log(err);
        if (rows.affectedRows > 0) {
            res.send({ "message": "vehicle deleted" })
        } else {
            res.send({ "message": "vehicle not found" })
        }
    })
})
module.exports = router;