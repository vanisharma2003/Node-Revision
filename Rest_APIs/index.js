const express = require("express");
let users = require("./MOCK_DATA.json");
const app = express();
const fs = require("fs");
const { json } = require("stream/consumers");
app.listen(8000, () => {
  console.log("Server Started");
});
//middleware
app.use(express.urlencoded({ extended: false }));
app.get("/users", (req, res) => {
  const html = `
<ul>
${users.map((user) => `<li>${user.first_name}</li>`)}
</ul>
`;
  res.send(html);
}); 
app.get("/api/users", (req, res) => {
  res.json(users);
});
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.send(user);
});
app.post("/api/users", (req, res) => {
  const body = req.body;
  if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
    return res.status(400).json({msg:"All fields are required"})
  }
  users.push({ id: users.length + 1, ...body });
  fs.writeFile("MOCK_Data.json", JSON.stringify(users), (err, data) =>
    res.status(201).json({
      status: "success",
      msg: "data created successfully",
      id: users.length,
    })
  );
});
app.patch("/api/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const userIndex = users.findIndex((user) => user.id === userId);
  const body = req.body;
  users[userIndex] = { userId, ...body };
  fs.writeFile("MOCK_Data.json", JSON.stringify(users), (err, data) =>
    res.json({ status: "success", msg: "data updated successfully" })
  );
});
app.delete("/api/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  users = users.filter((user) => user.id !== userId);
  fs.writeFile("MOCK_Data.json", JSON.stringify(users), (err, data) =>
    res.json({ status: "success", msg: "data deleted successfully" })
  );
});
