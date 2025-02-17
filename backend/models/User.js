const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "cashier" },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;