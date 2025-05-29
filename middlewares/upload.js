const upload = async (req, res, next) => {
   const user = req.body.image
    if (!user) {
        return res.status(403).json({
            status:"error",
            message:"Upload an image"
        })
    }
}
module.exports = upload