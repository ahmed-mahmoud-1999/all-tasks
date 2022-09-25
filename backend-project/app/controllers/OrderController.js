const userModel = require("../database/models/User");
const productModel = require("../database/models/Product");

class Order {
    static addOrder = async (req, res) => {
        try {
            const user = await userModel.findById(req.id);
            user.orders.push(req.body);
            await user.save();
            res.status(200).send({
                ok: true,
                message: "ordered successfully",
                data: req.body,
            });
        } catch (error) {
            res.status(500).send({ ok: false, message: error.message });
        }
    };
    static getAllOrders = async (req, res) => {
        try {
            const user = await userModel.findById(req.id);
            const orders = [];
            for (let o of user.orders) {
                const order = { products: [] };
                for (let product of o.products) {
                    const temp = await productModel.findById(product.productId);
                    order.products.push({ product: temp, quantity: product.quantity });
                }
                orders.push({ ...order, total_amount: o.total_amount, status: o.status });
            }
            res.status(200).send({
                ok: true,
                message: "successful request",
                data: orders,
            });
        } catch (error) {
            res.status(500).send({ ok: false, message: error.message });
        }
    };
}

module.exports = Order;
