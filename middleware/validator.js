const { validationResult, body } = require("express-validator");
const { BadReqError, UnauthorizedError } = require("../utils/cutomErrors");
const User = require("../model/User.model");
const validationFunc = (validations) => {
  return [
    validations,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorsMessages = errors.array().map((error) => error.msg);
        console.log(errorsMessages);
        if (errorsMessages[0].startsWith("wrong")) {
          throw new UnauthorizedError(errorsMessages);
        }
        throw new BadReqError(errorsMessages);
      }
      next();
    },
  ];
};

module.exports.validateReg = validationFunc([
  body("username").notEmpty().withMessage("Username is required").custom(async (username)=>{
    const nameTaken = await User.findOne({ username });
    if (nameTaken) {
      throw new BadReqError("username is already taken");
    }
  }),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Correct Format is required")
    .custom(async (email) => {
      const emailTaken = await User.findOne({ email });
      if (emailTaken) {
        throw new BadReqError("Email is already taken");
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8 })
    .withMessage("min 8 chars pass is required"),
]);
module.exports.validatelogin = validationFunc([
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Correct Format is required")
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new UnauthorizedError("wrong credentials (email)");
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8 })
    .withMessage("min 8 chars pass is required"),
    
]);
