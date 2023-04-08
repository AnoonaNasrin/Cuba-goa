const jwt = require("jsonwebtoken");
require("dotenv").config();

const authMidleWare = (req, res, next) => {
  const token = req.headers.token;
  try {
    if (!token) return res.status(401).json({ message: "Missing token" });
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) return res.status(403).json({ message: "Invalid token" });
      req.user = user;
      next();
    });
  } catch (er) {
    res.status(400).json({ status: false, message: er.message });
  }
};
