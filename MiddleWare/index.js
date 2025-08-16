const express = require("express");
const app = express();
const sampleData = [{ name: "Vani" }, { name: "Aditya" }];
app.use((req,res,next)=>{
console.log("I am middleware")
req.name="Meenu"
next()
})
app.get("/", (req, res) => {
    res.setHeader("X-name","Vani")
  return res.json(sampleData);
});
app.get("/custom", (req, res) => {
  return res.send(req.name)
});
app.listen(8000,()=>(
    console.log("Server Started")
))
