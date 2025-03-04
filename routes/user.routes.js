const express = require("express");
const { userController } = require("../controllers");
const router = express.Router();

router.get("/", userController.listUser);
router.get("/:id", userController.listUser);
router.post("/", userController.listUser);
router.patch("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;