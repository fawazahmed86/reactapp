const router = require("express").Router();
const articleController = require("../../controllers/articleController");

router.route("/")
  .post(articleController.create);

router.route("/saved")
.get(articleController.findAll);

module.exports = router;
