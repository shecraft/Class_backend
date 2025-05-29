const userModel = require("../models/user")
// const jwt = require("jsonwebtoken")
const isVerified = async (req, res, next)=>{
    const {user} = req
    if (!user.isVerified) {
        return res.status(403).json({
            status:"error",
            message:"You must be verified "
        })
    }
  console.log("Verified check user:", req.user);
    //    return res.send("dddddddkvysyyyyyyyyyyyyyyyy")
      next()


}

module.exports = isVerified