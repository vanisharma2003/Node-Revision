const User = require("../models/user");

//functions that we are going to attach with our routes
async function handleGetAllUsers(req, res) {
  const allDbUsers = await User.find({});
  return res.json({ allDbUsers });
}
async function getUserById(req, res) {
  const id = req.params.id;
  const user = await User.findById(id);
  return res.json(user);
}
async function updateUserById(req, res) {
  await User.findByIdAndUpdate(req.params.id, { firstName: "Sample" });
  return res.json({ success: true });
}
async function deleteUserById(req, res) {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ msg: "item deleted successfully" });
}
async function createNewUser(req, res) {
  const body = req.body;
  const result = await User.create({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    gender: body.gender,
  });
  console.log(result);
  return res.json({ msg: "data created successfully" });
}
async function getAllUsersOnScreen(req, res) {
  const allUsers = await User.find({});
  const html = `
    <ul>
      ${allUsers.map((item) => `<li>${item.firstName}</li>`).join("")}
    </ul>
  `;
  return res.send(html);
}
module.exports = {
  handleGetAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  createNewUser,
  getAllUsersOnScreen,
};
