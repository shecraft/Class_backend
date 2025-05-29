const express = require("express")
const authRouter = express.Router()
const {signup, login, verifyEmail} = require("../controllers/authController")

authRouter.get("/signup", signup)
authRouter.get("/login", login)
authRouter.post("/verify/:token", verifyEmail) 

   
module.exports = authRouter 
 

