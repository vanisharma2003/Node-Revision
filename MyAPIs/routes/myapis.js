const express = require("express")
const { handleAddEntry } = require("../controllers/myapis")
const myRouter = express.Router()

myRouter.post("/",handleAddEntry)
module.exports={myRouter}