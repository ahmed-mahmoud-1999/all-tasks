const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema(
    {
        userId: { type: String, required: true },
        products: [
            {
                productId: String,
                quantity: {
                    type: String,
                    default: 1,
                },
            },
        ],
        amount: { type: Number, required: true },
        address: { type: Object, required: true },
        status: {
            type: String,
            enum: ["pending", "recieved"],
            default: "pending",
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
