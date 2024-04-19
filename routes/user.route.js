const express = require("express");
const router = express.Router();

const {
  getUsers,
  getUser,
  createUser,
} = require("../controllers/user.controller.js");

router.get("/", getUsers);
router.get("/:id", getUser);

router.post("/create", createUser);

module.exports = router;
