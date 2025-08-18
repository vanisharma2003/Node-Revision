const mongoose = require("mongoose");
const express = require("express");
const app = express()
//middleware
app.use(express.urlencoded({ extended: false }));
//connection of mongoose and node.js
mongoose
  .connect("mongodb://127.0.0.1:27017/users-database")
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err));
//schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    required: true,
  },
},{timestamps:true});
//modal
const User = mongoose.model("user", userSchema);
app.listen(8000, (req, res) => {
  console.log("Server Started");
});
//post request
app.post("/api/users", async (req, res) => {
  const body = req.body;
  const result = await User.create({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    gender: body.gender,
  });
  console.log(result)
  return res.json({msg:"data created successfully"})
});
//get users
app.get("/users",async (req,res)=>{
    const allUsers = await User.find({})
     const html = `
    <ul>
      ${allUsers.map(item => `<li>${item.firstName}</li>`).join("")}
    </ul>
  `;
    return res.send(html)
})
app.get("/api/users",async (req,res)=>{
    const allDbUsers = await User.find({})
    return res.json({allDbUsers})
})