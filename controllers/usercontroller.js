const { StatusCodes } = require('http-status-codes');
const User= require('../model/User.model')

const getUser =async (req, res, next)=>{
    const {id} = req.user;

    const current =await  User.findById({_id:id})
 
    const {password, ...rest} = current._doc;
    res.status(StatusCodes.OK).json({rest})
}

module.exports = {getUser}