const express = require("express");
const app = express()
const userRouter = require("./routes/user")
const {connectMongoDb} = require("./connection")
connectMongoDb("mongodb://127.0.0.1:27017/users-database")
//middleware
app.use(express.urlencoded({ extended: false }));
//connection of mongoose and node.js
app.listen(8000, (req, res) => {
  console.log("Server Started");
});
app.use("/api/user",userRouter)
