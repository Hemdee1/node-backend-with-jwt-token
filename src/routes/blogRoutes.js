// RESTFUL API
// CREATE A REST API FOR A BLOG PLATFORM FOR THE FOLLOWING ENDPOINTS
// 1- CREATE A BLOG
// 2- GET ALL BLOGS
// 3- GET A BLOG
// 4- DELETE A BLOG
// 5- UPDATE A BLOG

const express = require("express");
const {
  createBlog,
  deleteBlog,
  getBlog,
  getAllBlogs,
  updateBlog,
} = require("../controller/blogController");
const checkAuthenticatedUser = require("../middleware/checkAuthenticatedUser");

const blogRoutes = express.Router();

blogRoutes.post("/", checkAuthenticatedUser, createBlog);
blogRoutes.put("/update/:id", checkAuthenticatedUser, updateBlog);
blogRoutes.delete("/delete/:id", checkAuthenticatedUser, deleteBlog);
blogRoutes.get("/", getAllBlogs);
blogRoutes.get("/:id", getBlog);

module.exports = blogRoutes;

//  AUTHORIZATION
// To allow access to some specific part of the backend based on some criteria.
// 1- To allow only logged in user to have access to update and delete blog
