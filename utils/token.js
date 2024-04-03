const jwt = require('jsonwebtoken')

const generateToken =(payload) => {
const token = jwt.sign(payload, process.env.JWT_KEY, {expiresIn:process.env.EXPIRE_DATE})
return token
}

module.exports = generateToken;