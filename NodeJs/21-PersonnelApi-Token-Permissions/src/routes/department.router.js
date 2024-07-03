"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */

const department = require("../controllers/department.controller");
const idValidation = require("../middlewares/idValidation");
const permission = require("../middlewares/permissions")

//* URL : /departments

router.route("/").get(permission.isLogin,department.list).post(department.create);

router.route("/:id/personnels").get(department.personnels);//* departmana göre personel listeleme

router
  .route("/:id")
  .all(idValidation)
  .get(permission.isLogin, department.read)
  .put(department.update)
  .patch(department.update)
  .delete(department.delete);

/* ------------------------------------------------------- */
module.exports = router;
