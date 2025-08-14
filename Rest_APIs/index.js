const express = require("express")
const users = require("./MOCK_DATA.json")
const app = express()
app.listen(8000,()=>{
    console.log("Server Started")
})
app.get("/users",(req,res)=>{
const html = `
<ul>
${users.map((user)=>`<li>${user.first_name}</li>`)}
</ul>
`
res.send(html)
})
app.get("/api/users",(req,res)=>{
res.json(users)
})
app.get("/api/users/:id",(req,res)=>{
const id = Number(req.params.id)
const user = users.find(user => user.id === id)
return gres.send(user)
})