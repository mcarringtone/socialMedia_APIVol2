const router = require("express").Router();

const {
  getSingleThoughts,
  getThoughts,
  createThoughts,
} = require("../../controllers/thoughtController");

router.route("/").get(getThoughts).put(createThoughts);

router.route("/:thoughtID").get(getSingleThoughts);

module.exports = router;
