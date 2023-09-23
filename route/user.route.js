const express = require("express");
const router = express.Router();
const { createUser, readUser, updateUser, deleteUser } = require("../controller/user.controller");

router.post("/create-user", createUser);
router.get("/read-user", readUser);
router.patch("/update-user", updateUser);
router.delete("/delete-user", deleteUser);

module.exports = router;