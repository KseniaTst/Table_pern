require('dotenv').config()
tableRouter =require ('./routes/table.routes')
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/table', tableRouter)

//error handling
app.use(errorHandler)

const start =async () =>{
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, ()=> console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()