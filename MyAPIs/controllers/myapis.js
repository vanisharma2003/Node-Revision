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
const showAllEntries = async (req,res)=>{
const allEntries = await myModel.find({})
console.log(allEntries)
res.json(allEntries)
}
const deleteEntry= async(req,res)=>{
const id = req.params.id
await myModel.findByIdAndDelete(id)
res.json({msg:"Data Deleted Successfully"})
}
const updateEntry = async(req,res)=>{
const id = req.params.id
await myModel.findByIdAndUpdate(id,{name:"Sample"})
res.json({msg:"data updated successfully"})
}
const showAnEntry = async(req,res)=>{
const id = req.params.id
const result = await myModel.findById(id)
res.json(result)

}
module.exports ={handleAddEntry,showAllEntries,deleteEntry,updateEntry,showAnEntry}
