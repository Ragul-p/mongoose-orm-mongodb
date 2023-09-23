const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    age: {
        type: Number,
        default: 0
    }
}, { strict: false }, { timestamps: true })



module.exports = mongoose.model("user", userSchema);