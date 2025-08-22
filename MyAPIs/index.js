const express = require("express")
const { connectDB } = require("./connection")
const { router } = require("./routes/myapis")
const app = express()
app.listen(8000,()=>{
console.log("server started")
})
connectDB()
// middleware
// app.use(express.json()) jab data raw m type krna ho as key-vaule pairs
app.use(express.urlencoded({ extended: false }))

app.use("/myapi",router)