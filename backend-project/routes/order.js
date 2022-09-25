const router = require("express").Router();
const orderController = require("../app/controllers/OrderController");
const verifyAdmin = require("../middleware/verifyAdmin");
const verifyToken = require("../middleware/verifyToken");

router.post("/add", verifyToken, orderController.addOrder);
router.get("", verifyToken, orderController.getAllOrders);

module.exports = router;
