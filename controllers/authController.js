const bcrypt = require('bcrypt');
const registerModel = require('../Models/Admin')
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
    const { username, password } = req.body
    const existingUser = await registerModel.findOne({ username: username })

    if (existingUser) {
        res.send("User already existed")
    }
    else {
        const hashedPassword = await bcrypt.hash(password, 10);

        const registerUser = await registerModel.create({
            username: username,
            password: hashedPassword
        })
        if (registerUser) {
            res.send("Success")
        }
    }
}

const loginUser = async (req, res) => {
    const { username, password } = req.body
    const matchUser = await registerModel.findOne({ username: username })

    if (!matchUser) {
        res.send("Username Cannot find")
    }
    else {
        const matchPassword = await bcrypt.compare(password, matchUser.password)
        if (matchPassword){
        res.send("User find")
            const token = jwt.sign({ userId: matchUser._id }, process.env.JWT_SECRET_KEY);
            console.log("The token", token)
    }
    else{
        res.send("user not found")
    }
    }
};



module.exports = { loginUser, registerUser }