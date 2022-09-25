const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
    name: { type: String, trim: true, required: true, unique: true },
});

module.exports = mongoose.model("Category", CategorySchema);
