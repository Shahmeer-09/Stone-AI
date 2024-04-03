const { StatusCodes } = require("http-status-codes");
const User = require("../model/User.model");
const  matchPwd  = require("../utils/matchpwd");
const { BadReqError } = require("../utils/cutomErrors");
const generateToken = require("../utils/token");
const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const user = await User.create({
    username,
    email,
    password,
  });
  console.log(user);
  res.status(StatusCodes.OK).json({ msg: "user created successfully" });
};
const login = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  const validpassword =await matchPwd(password, user.password);
  if (!validpassword) {
    throw new BadReqError("invalid password");
  }
  const token =await generateToken({
    id: user._id,
    username: user.username,
    email: user.email,
  });

  const oneday = 1000 * 60 * 60 * 24;
  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneday),
    secure: process.env.ENVIRONMENT === "production",
  });
  const { password: pwd, ...rest } = user._doc;
  res.status(StatusCodes.OK).json({ rest, token });
};

module.exports = { signup, login };
