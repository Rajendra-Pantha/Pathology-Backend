const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    token: {
        type: String
    }

});

const todoModel = mongoose.model("registerModel", registerSchema);
module.exports = todoModel