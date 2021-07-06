const express = require("express");
const router = express.Router();

const AuthController = require("../src/users/user.controller");

router.post('/login', AuthController.Login )

module.exports = router
