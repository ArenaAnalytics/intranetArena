const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Crear el Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: "regular",
    enum: [
      "regular",
      "admin"
    ]
  },
  password: {   
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = User = mongoose.model("users", UserSchema);