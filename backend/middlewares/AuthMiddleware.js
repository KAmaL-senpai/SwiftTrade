const { UserModel } = require("../models/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ status: false });
  }

  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.status(401).json({ status: false });
    }

    const user = await UserModel.findById(data.id);
    if (!user) {
      return res.status(401).json({ status: false });
    }

    req.user = user; // ✅ Attach user info to req
    next(); // ✅ Continue to next route handler
  });
};
