const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config();
const {authenticateToken} = require('./middlewares/authMiddleware')
const {protectedRoute} = require('./controllers/protectedController')
require('./Connection/Connection')
const testRoute = require('./Routes/testRoutes')
const authRoute = require('./Routes/authRoutes')
const patientRoute = require('./Routes/patientRoutes')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/register', authRoute)

app.use('/login', authRoute)

app.get('/protected-route', authenticateToken, protectedRoute);

app.use('/test', authenticateToken, testRoute)

app.use('/patient', authenticateToken, patientRoute)


app.listen(process.env.PORT,() => {
    console.log("Server is running at port 3001")
})
