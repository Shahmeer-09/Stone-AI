const  {Router}= require('express')

const router = Router()

const {signup} = require('../controllers/authcontrollers')


router.post('/signup',signup)

module.exports=router