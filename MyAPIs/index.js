const express = require("express")
const { connectDB } = require("./connection")
const { myRouter } = require("./routes/myapis")
const app = express()
app.listen(8000,()=>{
console.log("server started")
})
connectDB()
// middleware
// app.use(express.json()) 
app.use(express.urlencoded({ extended: false }))

app.use("/myapi",myRouter)