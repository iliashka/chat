const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/singup", userController.singup);

router.post("/singin", userController.singin);

module.exports = router;