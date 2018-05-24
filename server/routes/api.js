const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')

const db = "mongodb://sanclayr:passwordsanclayr@ds021999.mlab.com:21999/eventsdb"


mongoose.connect(db, err => {
    if(err){
        console.error('Error!' + err)
    } else {
        console.log('Conected to mongodb')
    }
})

router.get('/',(req, res) => {
    res.send('From API route')
})

module.exports = router