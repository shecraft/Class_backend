const express = require("express")
const { addCategory, fetchCategory, fetchCategoryByIdAndUpdate, deleteCategory, getAllCategories } = require("../controllers/categoryController")
const categoryRouter = express.Router()

categoryRouter.get("/",addCategory)
categoryRouter.get("/:id",fetchCategory)
categoryRouter.get("/:id", fetchCategoryByIdAndUpdate)
categoryRouter.delete("/:id", deleteCategory)
categoryRouter.post("/", getAllCategories)

module.exports = categoryRouter