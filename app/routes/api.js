const router = require("express").Router();
const { userController } = require("../controllers/index");

router.use('/users', userController);

module.exports = router;


