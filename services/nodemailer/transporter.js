 const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    service:"gmail",
    secure:false,
    port:587,
    auth:{
        user:"faizahojo40@gmail.com",
        pass:"ttnp ybng kjxq yccp"
    }
})

module.exports = transporter



transporter.verify((err, success)=>{
    if (success) {
        console.log("Ready to send email messages");
        
    }else{
        console.log(err);
        
    }
}

)

const sendMail =()=>{
    transporter.sendMail({
        to:"faizahojo40@gmail.com",
        subject:"Welcome to Amazon website",
        sender:"Amazon amazon@gmail.com",
        html: `
             <div>
              <h1>Welcome to our website</h1>
              <p>Thanks for patronising us</p>
              <Button style="background:"green" border:"none" border-radius:"5px" color:"white">Grab Yours</Button>
             </div>
        `
    })
}
// sendMail()