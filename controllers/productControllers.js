const productModel = require("../models/product")
const addProduct = async (req ,res) => {
    try {
        const product = await productModel.create({...req.body, user:req.user_id})
        if (!product) {
          return res.status(400).json({
            status:"error",
            message:"Product not created"

          })
        }

        res.status(201).json({
            status:"success",
            message:"Product created successfully",
            product
        })

    } catch (error) {
        console.log(error);
        
    }
}

const getAllProducts = async(req, res)=>{
   const product = await productModel.find().populate("user category")
    if (!product) {
        return res.status(400).json({
            status:"error",
            message:"Not successfull"
        })
    }

    res.status(201).json({
        status:"success",
        message:"Successfull",
        product
    })
}
// const deleteAllProducts = (req, res)=>{
//     res.json("Products are deleted successfully")
// }

// const postAllProducts =(req, res)=>{
//    res.json("Products are now updated")
// }

// const patchAllProducts =(req,res)=>{
//      res.json("Products patched now")
// }

// const putAllProducts =(req, res)=>{
//     res.json("Products put in")
// }
module.exports ={
    getAllProducts, addProduct
}