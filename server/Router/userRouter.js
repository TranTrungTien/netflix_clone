const router = require("express").Router();

const userController = require("../Controllers/userController");

router.post("/sign-up", userController.create);
router.get("/", userController.get);
router.patch("/update", userController.update);
router.delete("/delete", userController.del);

module.exports = router;
