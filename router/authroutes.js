const  {Router}= require('express')

const router = Router()

const {signup, login} = require('../controllers/authcontrollers')
const {validateReg, validatelogin }= require('../middleware/validator')

router.post('/signup', validateReg,signup)
router.post('/login', validatelogin,login)

module.exports=router