const express = require("express")
const { handleAddEntry,showAllEntries,deleteEntry,updateEntry, showAnEntry } = require("../controllers/myapis")
const router = express.Router()

router.post("/",handleAddEntry)
router.get("/",showAllEntries)
router.delete("/:id",deleteEntry)
router.patch("/:id",updateEntry)
router.get("/:id",showAnEntry)
module.exports={router}