const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const userModel = require("../models/user")
const sendVerificationEmail = require("../services/nodemailer/sendVerificationEmail")
const token = require("../utils/randomString")
const generateRandomString = require("../utils/randomString")

const signup = async (req, res, next) => {
    const {password, email, name} = req.body
    try {
        const salt = await bcrypt.genSalt(8)
        const hashpassword = await bcrypt.hash(password, salt)
        const token = generateRandomString(8)
        const verificationExp = Date.now() + 30000
        const user = await userModel.create({...req.body, password:hashpassword, verificationToken: token, verificationExp})
        if (!user) {
            return res.status(400).json({
                status:"error",
                message:"Can not signup"
            })
        }

        const userFirstName = name.split(" ")[0]
        sendVerificationEmail(email, userFirstName, token)

        res.status(201).json({
            status:"success",
            message:"Signup successful, You can now verify your account."
        })
    } catch (error) {
        console.log(error)
        next(error)
        
    }
}

const verifyEmail = async (req, res, next) => {
    const {token} = req.params
    try {
        const user = await userModel.findOne({verficationToken: token})
        if (!user) {
           return res.status(400).json({
            status:"error",
            message:"Your token is invalid or ypour account has been verified"
           }) 
        }
        if (user.verificationExp < Date.now()) {
            return res.status(403).json({
                status:"error",
                message:"verification time is expired"
            })
        }
        await userModel.findByIdAndUpdate(user._id,{verificationToken:null, verificationExp:null,isVerified: true})
        res.status(200).json({
            status:"success",
            meeasge:"Email has been verified successsfully"
        })
    } catch (error) {
        console.log(error)
        next(error); 
        
    }      
}

const login = async (req, res, next) => {
    const {email, password} = req.body
    try {
        const user = await userModel.findOne({email})
        if (!user) {
           return res.status(400).json({
            status:"error",
            message:"Email or Password  incorrect"
           }) 
        }
        const passwordCorrect = await bcrypt.compare(password, user.password)
        if (!passwordCorrect) {
            return res.status(400).json({
                status:"error",
                message:" Email or Password incorrect"
            })
        }

        const accessToken = await jwt.sign({id: user._id, email: user.email}, process.env.jwt_secret,{expiresIn: process.env.expireToken})

        
        res.status(201).json({
            status:"success",
            message:"Login successful",
            accessToken
        })
    } catch (error) {
        console.log(error)
        next(error);
        
    }
}

module.exports ={
    signup,
    login,
    verifyEmail
}