const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    username: {
        type: String,
        require
    },
    password: {
        type: String,
        require
    },

});

const todoModel = mongoose.model("registerModel", registerSchema);
module.exports = todoModel