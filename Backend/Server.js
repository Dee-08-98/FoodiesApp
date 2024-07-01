const express = require('express')
const connectDB = require('./Database/Connection')
const router = require('./Routes/router')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())
app.use(router)

connectDB()
app.listen(8888,()=>{
    console.log('Server is running sucessfully on port 8888');
})