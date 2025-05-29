const express = require("express")
const productRouter = express.Router()
const {  getAllProducts,  addProduct } = require("../controllers/productControllers")
const isLoggedIn = require("../middlewares/isLoggedIn")
const isSeller = require("../middlewares/isSeller")
const isVerified = require("../middlewares/isVerified")
const upload = require("../middlewares/upload")



productRouter.get("/",  getAllProducts)
// productRouter.post("/:id", postAllProducts)
// productRouter.delete("/:id",deleteAllProducts)
// productRouter.put("/", putAllProducts)
productRouter.post("/",isLoggedIn, isSeller, isVerified, upload, addProduct)

module.exports = productRouter