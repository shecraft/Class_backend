const userModel = require("../models/user")
const jwt = require("jsonwebtoken")
const isLoggedIn = async(req, res, next)=>{
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1]
    }

    if (!token) {
        return res.status(403).json({
            status:"error",
            message:"Provide a token"
        })
    }

    const decoded = jwt.verify(token, process.env.jwt_secret)

    // console.log(decoded);
    
    const user = await userModel.findById(decoded.id)

    if (!user) {
        return res.status(404).json({
            status:"error",
            message:"This token belongs to nobody"
        })
    }
    req.user = user
      next()
    // res.send("faizaaa")
    // console.log(req.user);
    
}

module.exports = isLoggedIn