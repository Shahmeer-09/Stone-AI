const  {Router}= require('express')

const router = Router()

const {getUser} = require('../controllers/usercontroller') 
const verifyToken = require('../middleware/vrifyjwt')   
router.get('/currentUser',verifyToken ,getUser)


module.exports=router