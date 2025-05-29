 const handleDuplicateError = (err)=>{
    const errorKey = Object.keys(err.keyValue)[0]
    const errorValue = Object.values(err.keyValue)[0]
    const messageObj = new Error(`${errorKey} of ${errorValue} already exists`)

    const error = {
        statusCode: 400,
        message: messageObj.message
    }

    return error
}

const handleValidationError =(err)=>{
    const error = Object.values(err.errors).map(error=> error.message)
    return{
        status:400,
        message: error.message[0]
    }
    
}


const errorHandler = (err, req, res, next)=>{
   
    if(err.code === 11000){
        const error = handleDuplicateError(err)
        res.status(error.statusCode).json({
            message: error.message                   
        })
    } else if (err.name === "ValidationError") {
        const error = handleValidationError(err)
        res.status(error.status).json({
            message: error.message
        })
        // res.json("it is a Validation Error")        
    }
    else if (err.name === "CastError") {
        res.json("it is a CastError")                
    }
    else if (err.name === 'TokenExpiredError') {
        res.status(400).json({
            message:"This token has expired, kindly login again."
        })
    }
     else if (err.name === 'JsonWebTokenError') {
        res.status(400).json({
            message:"This token is invalid, kindly login again."
        })
    }
    else {
        res.status(500).json({message: "Something went wrong", errorName:err.name, errorCode:err.code})
    }           
}


module.exports = errorHandler 