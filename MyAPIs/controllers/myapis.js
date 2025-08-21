const { myModel } = require("../model/myapis");

const handleAddEntry = async (req,res)=>{
const body = req.body
await myModel.create({
    name:body.name,
    age:body.age,
    course:body.course
})
res.json({msg:"data created successfully"})
}
module.exports ={handleAddEntry}
