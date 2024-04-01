require("dotenv").config();
const express = require("express");
const app = express();
const Dbconnecction = require("./config/Connectdb");
const ErrorMiddleWare = require('./middleware/Errormanager')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/auth",  require("./router/authroutes"));


app.use("*", (req, res) => {
  res.status(404).send("page not found");
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
