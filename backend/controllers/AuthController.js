const { UserModel } = require("../models/UserModel");
const { createSecretToken } = require("../utils/SecretToken");
const bcrypt = require("bcrypt");

module.exports.SignupAuth = async (req, res, next) => {
  try {
    const { email, password, username } = req.body;
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.json({ message: "user already existed" });
    }
    const user = await UserModel.create({ email, password, username });
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (err) {
    console.error(err);
  }
};

module.exports.LoginAuth = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "All fields are required" });
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.json({ message: "Incorrect password or email" });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect password or email" });
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User logged in successfully", success: true, user });
    next();
  } catch (err) {
    console.error(err);
  }
};

module.exports.LogoutAuth = (req, res) => {
  res.clearCookie("token", {
    sameSite: "None",
    secure: false,
  });
  return res
    .status(200)
    .json({ message: "User logged out successfully", success: true });
};
