const express = require("express")
const { addUsers, fetchUsers, fetchAllUsers } = require("../controllers/userControllers")
const userRouter = express.Router()


userRouter.get("/", addUsers)
userRouter.get("/:id", fetchUsers)
userRouter.post("/", fetchAllUsers)




module.exports = userRouter