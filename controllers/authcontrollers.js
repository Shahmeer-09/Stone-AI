const { StatusCodes } = require('http-status-codes');
const User = require('../model/User.model')


const signup = async (req, res) => { 
    const {username, email, password} = req.body;
    const user =await User.create({
        username, email, password
    })
    console.log(user)
    res.status(StatusCodes.OK).json({msg:"user created successfully"})
}

module.exports = {signup}