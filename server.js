// PACKAGE TO INSTALL TO SET UP AUTHENTICATION WITH JWT TOKEN
// JSONWEBTOKEN
// COOKIE-PARSER
// DOTENV

const express = require("express");
const mongoose = require("mongoose");
const blogRoutes = require("./src/routes/blogRoutes");
const userRoutes = require("./src/routes/userRoutes");
const cookieParser = require("cookie-parser");

const app = express();

const MONGO_URI = "mongodb://127.0.0.1:27017/cohort";
const PORT = 7000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ROUTES
app.use("/user", userRoutes);
app.use("/blog", blogRoutes);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Database connected successfully");

    app.listen(PORT, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("app is running on port " + PORT);
      }
    });
  })
  .catch((err) => {
    console.log(err);
  });
