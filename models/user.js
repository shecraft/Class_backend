const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
      type:String,
      required:true
    },
    email:{
        type:String, 
        required:true,
        unique:[true, "Email already exist"]
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:["buyer", "seller", "admin"],
        default:"buyer"
    },
    isVerified:{
        type:Boolean,
        default:false
    },

    verficationToken:{
      type:String
  },
   verificationExp:{
    type:String
  }
   
})

const userModel = mongoose.model("users", userSchema)
module.exports = userModel