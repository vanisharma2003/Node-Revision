const mongoose = require("mongoose")
const connectDB=async()=>{
return mongoose.connect("mongodb://127.0.0.1:27017/new-database")
.then(()=>{console.log("database connected")})
.catch((err)=>{console.log(err)})
}
module.exports = {connectDB}