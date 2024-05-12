const mongoose = require('mongoose')

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