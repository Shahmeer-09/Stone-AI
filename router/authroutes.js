const  {Router}= require('express')

const router = Router()

const {signup, login, logout} = require('../controllers/authcontrollers')
const {validateReg, validatelogin }= require('../middleware/validator')

router.post('/signup', validateReg,signup)
router.post('/login', validatelogin,login)
router.get('/logout',logout)

module.exports=router