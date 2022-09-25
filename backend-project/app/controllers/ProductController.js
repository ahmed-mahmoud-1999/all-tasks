const productModel = require("../database/models/Product");

class Product {
    static showAll = async (req, res) => {
        try {
            const category = req.query.category;
            const allProducts = category
                ? await productModel.find({ category: category })
                : await productModel.find();
            res.status(200).send({
                ok: true,
                message: "successful request",
                data: allProducts,
            });
        } catch (error) {
            res.status(500).send({ ok: false, message: error.message });
        }
    };
    static addProduct = async (req, res) => {
        try {
            const product = await productModel.create(req.body);
            console.log(req.file, "controller");
            product.img = req.file?.path || "";
            await product.save();
            res.status(200).send({ ok: true, message: "added successfully", data: product });
        } catch (error) {
            res.status(500).send({ ok: false, message: error.message });
        }
    };
    static deleteProduct = async (req, res) => {
        try {
            const product = await productModel.findByIdAndDelete(req.params.id);
            res.status(200).send({ ok: true, message: "deleted successfully", data: product });
        } catch (error) {
            res.status(500).send({ ok: false, message: error.message });
        }
    };
    static editProduct = async (req, res) => {
        try {
            const product = await productModel.findByIdAndUpdate(req.params.id, {
                ...req.body,
                img: req.file?.path || "",
            });
            res.status(200).send({ ok: true, message: "edited successfully", data: product });
        } catch (error) {
            res.status(500).send({ ok: false, message: error.message });
        }
    };
    static singleProduct = async (req, res) => {
        try {
            const product = await productModel.findById(req.params.id);
            res.status(200).send({ ok: true, message: "uccessful request", data: product });
        } catch (error) {
            res.status(500).send({ ok: false, message: error.message });
        }
    };
}

module.exports = Product;
