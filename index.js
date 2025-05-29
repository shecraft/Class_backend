const cors = require("cors")
const express = require("express")
const app = express()
const userRouter = require("./routes/userRouter")
const productRouter = require("./routes/productRouter")
const categoryRouter = require("./routes/categoryRouter")
const blogRouter = require("./routes/blogRouter")
const authRouter = require("./routes/authRouter")


app.use(express.json())
app.use(cors())


const connectToDb = require("./config/connectToDb")
const errorHandler = require("./middlewares/errorHandler")
require("./services/nodemailer/transporter")
connectToDb()    

const PORT = 4006
app.listen(PORT, (req,res)=>{
    console.log("listening on port " + PORT)
})
 

app.use("/api/auth", authRouter)  
app.use("/api/users", userRouter)
app.use("/api/products", productRouter)
app.use("/api/categories", categoryRouter)
app.use("/api/blogs",       blogRouter)

app.all("/{*any}", (req, res)=>{
   res.json(`${req.method} ${req.originalUrl} is not an endpoint on this server.`)
})

app.use(errorHandler)
