const mongoose = require("mongoose");
const mySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
});
const myModel = new mongoose.model("mymodel",mySchema)
module.exports={myModel}
