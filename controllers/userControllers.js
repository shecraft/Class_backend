const userModel = require("../models/user")
const addUsers = async (req ,res) => {
    try {
        const user = await userModel.create(req.body)
        if (!user) {
          return res.status(400).json({
            status:"error",
            message:"user not created"

          })
        }

        res.status(201).json({
            status:"success",
            message:"user created successfully",
            user
        })

    } catch (error) {
        console.log(error);
        
    }
}

const fetchUsers = async (req,res)=>{
    const {id} = req.params
    try {
        const user = await userModel.findById(id)
        if (!user) {
            return res.status(400).json({
                status:"error",
                message:"user can not be fetched"
            })
        }

        res.status(201).json({
            status:"success",
            message:"user fetched fully",
            user
        })
    } catch (error) {
        console.log(error);
        
    }
       
       
    
}
const fetchAllUsers = async (req, res) => {
    try {
        const user = await userModel.find()
        if (!user) {
            return res.status(400).json({
                status:"error",
                message:"Can not fetched"
            })
        }
        res.status(201).json({
            status:"success",
            message:"All users fetched",
            user
        })
    } catch (error) {
        console.log(error);
        
    }
}

// const deleteAllUsers = (req, res)=>{
//     res.json("Users are deleted successfully")
// }

   
//    const patchAllUsers =(req,res)=>{
//      res.json("Users patched now")
// }

module.exports ={
    addUsers, fetchUsers, fetchAllUsers
}