const userModel = require("../models/user")
// const jwt = require("jsonwebtoken")
const isSeller = async (req, res, next)=>{
    const {user} = req
    if (user.role !== "seller") {
        return res.status(403).json({
            status:"error",
            message:"You must be a seller "
        })
    }

    //    return res.send("dddddddkvysyyyyyyyyyyyyyyyy")
      next()


}

module.exports = isSeller