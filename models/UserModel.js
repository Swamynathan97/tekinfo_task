const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "Please enter valid email address"],
  },
  mobileNumber: {
    type: String,
    unique: true,
    required: true,
    minlength: 10,
    maxlength: 10,
    validate: {
      validator: (value) => {
        const re = /^[6-9]\d{9}$/;
        return re.test(String(value));
      },
      message: "Mobile Number should start with 6, 7, 8, or 9",
    },
  },
  image: {
    type: String,
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  
  role: {
    type: String,
    enum : [ 'user', 'admin']
}

});

module.exports = mongoose.model("User", userSchema);
