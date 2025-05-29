const express = require("express")
const {addNewBlog, fetchBlog} = require("../controllers/blogController")
const blogRouter = express.Router()

blogRouter.get("/", addNewBlog)
blogRouter.get("/:id", fetchBlog)

module.exports = blogRouter 