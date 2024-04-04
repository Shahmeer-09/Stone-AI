const jwt = require("jsonwebtoken");
const { UnauthorizedError } = require("../utils/cutomErrors");
const verifyToken = (req, res, next) => {
  const { token } = req.cookies;

  if (!token)
    throw new UnauthorizedError("authentication invalid please retry");
  jwt.verify(
    token, 
    process.env.JWT_KEY, 
    (err, decoded) => {
    if (err) throw new UnauthorizedError("authentication invalid please retry");
     const {id, email} = decoded
    req.user = {id, email}
    next();
  });
};

module.exports= verifyToken
