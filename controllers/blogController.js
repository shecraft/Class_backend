const blogModel = require("../models/blog")

const addNewBlog = async (req, res) => {
   try {
    const blog = await blogModel.create(req.body)
    if (!blog) {
        return res.status(400).json({
            status:"error",
            message:"Blog can not be added"
        })
    }

    res.status(201).json({
        status:"success",
        message:"Blog added successfully",
        blog
    })
   } catch (error) {
    console.log(error);
    
   }
}

const fetchBlog = async () => {
    try {
        const blog = await blogModel.find()
        if (!blog) {
            return res.status(404).json({
                status:"error",
                message:"Blog cant be fetch"
            })
        }

        res.status(201).json({
            status:"success",
            message:"Blog fetched successfully"
        })
    } catch (error) {
        console.log();
        
    }
}
module.exports = {
    addNewBlog,
    fetchBlog
}