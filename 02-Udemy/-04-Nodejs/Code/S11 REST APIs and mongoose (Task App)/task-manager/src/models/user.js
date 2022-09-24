const mongoose = require("mongoose");
const validator = require("validator");

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error();
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a postive number");
      }
    },
  },
  password: {
    type: String,
    minlength: 8,
    trim: true,
    required: true,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("password cannot contain 'password' ");
      }
    },
  },
});

module.exports = User;
