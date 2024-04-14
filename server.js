require("dotenv").config();
const express = require("express");
const app = express();
const Dbconnecction = require("./config/Connectdb");
const ErrorMiddleWare = require('./middleware/Errormanager')
const morgan = require('morgan')
const cookieparser = require('cookie-parser');
const { StatusCodes } = require("http-status-codes");
const cors = require('cors')
const path = require("path");
if(process.env.ENVIRONMENT==='development'){
  app.use(morgan('tiny'))
}
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "client/dist")));
app.use(cookieparser())
app.use(express.json());

app.use("/api/auth",  require("./router/authroutes"));
app.use("/api/user",  require("./router/userroute"));
app.use("/api/openAi",  require("./router/openAiRoute"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client/dist", "index.html"));
})

app.use("*", (req, res) => {
  res.status(StatusCodes.NOT_FOUND).send("page not found");
});

app.use(ErrorMiddleWare)
const port = process.env.port || 5100;
try {
  Dbconnecction();
  app.listen(port, () => console.log(`server is listening on ${port}`));
} catch (error) {
  console.log(error);
  process.exit(1);
}

module.exports=app