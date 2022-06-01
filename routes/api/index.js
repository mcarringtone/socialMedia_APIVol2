const router = require("express").Router();
const userRouter = require("./user");
const thoughtRouter = require("./thought");

router.use("./user", userRouter);
router.use("./thought", thoughtRouter);

module.exports = router;
