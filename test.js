const fs = require("fs")
// fs.writeFileSync("note.txt","Hlo")
// fs.writeFile("notenew.txt","hii",(err)=>console.log(err))
const result = fs.readFileSync("note.txt","utf-8")
// console.log(result)
// fs.readFile("note.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(result)
//     }
// })
// fs.appendFileSync("note.txt","Hii")
// fs.copyFileSync("./note.txt","./copy.txt")
// fs.unlinkSync("./copy.txt")
const os = require("os")
console.log(os.cpus().length)