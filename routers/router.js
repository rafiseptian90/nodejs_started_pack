const express = require('express')
const router = express.Router()

router.get('/', function(req, res){
    res.status(200).json({
        message: 'Hello NodeJS'
    })
})

module.exports = router