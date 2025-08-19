const express = require("express");
const router = express.Router();
const {
  handleGetAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  createNewUser,
  getAllUsersOnScreen,
} = require("../controllers/user");
//post request
router.post("/", createNewUser);
//get all users on screen
// router.get("/", getAllUsersOnScreen);
//get all users on api
router.get("/", handleGetAllUsers);
//render a specific information using id
router.get("/:id", getUserById);
//update an information
router.patch("/:id", updateUserById);
//delete an information
router.delete(":id", deleteUserById);

module.exports = router;
