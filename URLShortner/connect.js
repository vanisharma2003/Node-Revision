const mongoose = require("mongoose")
async function connectToMongoDb(url){
    return mongoose.connect(url)
    .then(()=>console.log("data base connected successfully"))
    .catch((err)=>console.log(err))
}
module.exports = {connectToMongoDb}