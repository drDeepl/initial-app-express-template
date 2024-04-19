const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Имя пользователя не может быть пустым"],
  },
  passwordHash: {
    type: String,
    required: [true, "Пароль не может быть пустым"],
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
