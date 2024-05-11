const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config();
const mongoose = require('mongoose')
const { loginUser, registerUser } = require('./controllers/authController');
const {authenticateToken} = require('./middlewares/authMiddleware')
const {protectedRoute} = require('./controllers/protectedController')


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.DATABASE_LINK)
const db = mongoose.connection

db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

db.once('open', () => {
    console.log('MongoDB connected successfully');
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});


app.post('/register', registerUser)

app.post('/login', loginUser );

app.get('/protected-route', authenticateToken, protectedRoute);

app.listen(process.env.PORT,() => {
    console.log("Server is running at port 3001")
})
