const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        name: { type: String, trim: true },
        email: { type: String, trim: true, required: true, unique: true },
        password: { type: String, trim: true, required: true },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        orders: [
            {
                products: [
                    {
                        productId: String,
                        quantity: {
                            type: Number,
                            default: 1,
                        },
                    },
                ],
                total_amount: { type: String, required: true },
                address: { type: Object, required: true },
                status: {
                    type: String,
                    enum: ["pending", "recieved"],
                    default: "pending",
                },
            },
            { timestamps: true },
        ],
    },
    { timestamps: true }
);

userSchema.methods.toJSON = function () {
    const userData = this.toObject();
    delete userData.password;
    delete userData.__v;
    // delete userData._id
    return userData;
};

module.exports = mongoose.model("User", userSchema);
