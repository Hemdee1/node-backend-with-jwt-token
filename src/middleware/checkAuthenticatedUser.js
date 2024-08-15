const checkAuthenticatedUser = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    res.status(400).json("User not authenticated");
  } else {
    next();
  }
};

module.exports = checkAuthenticatedUser;
