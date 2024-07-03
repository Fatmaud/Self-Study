const router = require("express").Router();

const UserController = require("../controllers/user.controller");

//!base route=>/user

router.route("/").get(UserController.list).post(UserController.create);

//parametre isimleri controllerda belirtilen parametre ile ayni olmali, yoksa sorgudan undefined döner.
router
  .route("/:userId")
  .get(UserController.read)
  .put(UserController.update)
  .delete(UserController.delete);

module.exports = router;
