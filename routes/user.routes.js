const express = require("express");
const { userController } = require("../controllers");
const router = express.Router();

router.get("/", userController.listUser);
router.post("/", userController.createUser);
router.patch("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;