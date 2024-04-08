const  {Router}= require('express')

const router = Router()
const verifyToken = require('../middleware/vrifyjwt')
const  {summarize, extractor,Chat, JsCode} = require('../controllers/opneAi')

router.post('/summarize',verifyToken ,summarize)
router.post('/extract',verifyToken ,extractor)
router.post('/chat',verifyToken ,Chat)
router.post('/code',verifyToken ,JsCode)


module.exports=router