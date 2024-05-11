const bcrypt = require('bcrypt');
const registerModel = require('../Models/Admin')
const jwt = require('jsonwebtoken');

// register
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
            res.status(200).send("Success")
        }
    }
}

// login
const loginUser = async (req, res) => {
    const { username, password } = req.body
    const matchUser = await registerModel.findOne({ username: username });

    if (!matchUser) {
        res.status(404).send("Username Cannot find")
    }
    else {
        const matchPassword = await bcrypt.compare(password, matchUser.password)
        if (matchPassword){
        
            const token = await jwt.sign({ userId: matchUser._id }, process.env.JWT_SECRET_KEY);
            
            res.status(200).json({
                status: 'true',
                message: "Login successfully",
                token: token,
                data: matchUser
            })
    }
    else{
        res.status(404).send("user not found")
    }
    }
};



module.exports = { loginUser, registerUser }