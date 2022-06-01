const router = require("express").Router();

const { getUser, createUser } = require("../../Controllers/userController");

router.route("/").get(getUser).post(createUser);

module.exports = router;
