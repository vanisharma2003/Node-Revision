const express = require("express")
const router = require("./routes/url")
const {connectToMongoDb} = require("./connect")
const app = express()
const port = 8000
app.use(express.json())
connectToMongoDb("mongodb://127.0.0.1:27017/url-shortner")
app.listen(port,()=>{
    console.log(`App is listening on port ${port}`)
})
app.use("/url",router)