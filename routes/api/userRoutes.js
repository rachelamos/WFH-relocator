const router = require('express').Router();
// const withAuth = require('../../utils/auth');
const { User } = require('../../models');
const { response } = require('express');
const userController = require("../../controllers/userController");


router.route("/signup")
.post(userController.signup);


router.route("/login")
.get(userController.login);

module.exports = router;