const {nanoid} = require("nanoid")
const URL = require("../models/url")

async function generateNewShortUrl(req,res){
const shortId = nanoid(8)
const body = req.body
if(!body.url) return res.json({error:"URL is required"})
await URL.create({
    shortId:shortId,
    redirectURL:body.url,
    visitHistory:[]
})
return res.json({id:shortId})
}
const redirectToUrl = async(req,res)=>{
const id = req.params.id
const requiredEntry = await URL.findOne({shortId:id})
res.redirect(requiredEntry.redirectURL)
}
module.exports={generateNewShortUrl,redirectToUrl}