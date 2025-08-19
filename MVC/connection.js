const mongoose = require("mongoose");
const connectMongoDb = async ()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/users-database")
    .then(()=>console.log("data updated successfully"))
    .catch((err)=>console.log(err))
}

module.exports = {connectMongoDb}