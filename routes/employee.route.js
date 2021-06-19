const express = require("express");

const UserController = require("../controllers/employee");

const router = express.Router();

router.post("/add", UserController.createEmployee);



module.exports = router;