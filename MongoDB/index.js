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
//get all users on screen
app.get("/users",async (req,res)=>{
    const allUsers = await User.find({})
     const html = `
    <ul>
      ${allUsers.map(item => `<li>${item.firstName}</li>`).join("")}
    </ul>
  `;
    return res.send(html)
})
//get all users on api
app.get("/api/users",async (req,res)=>{
    const allDbUsers = await User.find({})
    return res.json({allDbUsers})
})
//render a specific information using id 
app.get("/api/users/:id", async (req,res)=>{
  const id = req.params.id
  const user = await User.findById(id)
  return res.json(user)
})
//update an information
app.patch("/api/users/:id",async (req,res)=>{
  //as of now we are sending data manually but this should comes from frontend 
await User.findByIdAndUpdate(req.params.id,{firstName:"Sample"})
return res.json({success:true})
})
//delete an information
app.delete("/api/users/:id",async (req,res)=>{
  await User.findByIdAndDelete(req.params.id)
  return res.json({msg:"item deleted successfully"})``
})