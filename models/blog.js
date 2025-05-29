const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
        minLength:5,
        maxLength:150
    },
    content:{
        type:String,
        required:true,
        minLength:20
    },
    author:{
        type:String,
        required:true
    },
    tags:{
       type:[String],
       enum:["Author", "Writer", "Poetry"]
    },
    isPublished:{
          type:Boolean,
          Default:false
    },
    publishedAt:{
          type:Date
    }
})
const blogModel = mongoose.model("blogs", blogSchema)
module.exports = blogModel