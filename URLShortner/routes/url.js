const express = require("express")
const { generateNewShortUrl,redirectToUrl } = require("../controllers/url")
const router = express.Router()
router.post("/",generateNewShortUrl)
router.get("/:id",redirectToUrl)
module.exports = router