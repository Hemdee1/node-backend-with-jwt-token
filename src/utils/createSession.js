const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const createSession = (res, id) => {
  // to create the token, jwt takes 3 arguments, 1- payload, 2- secret, 3- optional settings
  const payload = { id: id };
  const SECRET = process.env.SECRET;

  const token = jwt.sign(payload, SECRET, {
    expiresIn: "3d",
  });

  // to create a cookie, it takes 3 argument, 1- name, 2- value, 3- optional settings
  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    // maxAge: 3600000 // 1 hour
    maxAge: 3600000 * 24 * 3, // 3 day
  });
};

module.exports = createSession;
