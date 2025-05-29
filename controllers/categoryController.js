const categoryModel = require ("../models/category") 

const addCategory = async (req, res) => {
    try {
        const category = await categoryModel.create(req.body)
        if (!category) {
            return res.status(400).json({
                status:"error",
                message:"category can not be added"
            })
        }

        res.status(201).json({
            status:"success",
            message:"category added successfully",
            category
        })
    } catch (error) {
        console.log(error);
        
    }
}

const getAllCategories = async (req, res) => {
    try {
        const category = await categoryModel.find()
        if (!category) {
            return res.status(400).json({
                status:"error",
                message:"All category not fetched"
            })
        }
        res.status(201).json({
            status:"success",
            message:"All category fetched"
        })
    } catch (error) {
        console.log(error);
        
    }
}

const fetchCategory = async (req,res)=>{
    const {id} = req.params
    try {
        const category = await categoryModel.findById(id)
        if (!category) {
            return res.status(400).json({
                status:"error",
                message:"category can not be fetched"
            })
        }

        res.status(201).json({
            status:"success",
            message:"category fetched fully",
            category
        })
    } catch (error) {
        console.log(error);
        
    }
       
       
    
}
    
const fetchCategoryByIdAndUpdate = async (req,res)=>{
    const {id} = req.params
       try {
         const category = await categoryModel.findByIdAndUpdate(id,req.body)
           
         if (!category) {
            return res.status(400).json({
                status:"error",
                message:"category can not be fetched"
            })
        }

        res.status(201).json({
            status:"success",
            message:"category fetched fully",
            category
        })
    } catch (error) {
        console.log(error);
        
    }
}

const deleteCategory = async (req, res) => {
    const {id} = req.params
    try {
       const category= await categoryModel.findByIdAndDelete(id)
        if (!category) {
            return res.status(400).json({
                status:"error",
                message:"category can not be deleted"
            })
        }

        res.status(201).json({
            status:"success",
            message:"category has been deleted",
            category
        })
    } catch (error) {
        console.log(error);
        
    }
}
    

module.exports ={
    addCategory,
    fetchCategory,
    fetchCategoryByIdAndUpdate,
    deleteCategory,
    getAllCategories
}