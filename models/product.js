const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    title:{
         type:String
    },
    price:{
        type:Number
    },
    description:{
        type:String,
    },
   category:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"categories"
   },
   user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"users"
   }
})

const productModel = mongoose.model("products", productSchema)
module.exports = productModel