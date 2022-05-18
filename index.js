if (process.env.APP_ENV !== 'production') {
    require('dotenv').config()
}

// setup express
const express = require('express')
const app = express()

// parse content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
// parse content-type: application/json
app.use(express.json())

// setup CORS
const cors = require('cors')
app.use(cors())

// setup mongoose
const mongoose = require('mongoose')
async function connect() {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.y2jqm.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
}
connect().catch(err => console.error(err))

// import router
const router = require('./routers/router')

// setup public path
app.use(express.static('public'))

app.use('/', router)
app.listen(process.env.ENV_PORT || 3000)
