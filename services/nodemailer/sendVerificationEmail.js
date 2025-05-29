const transporter = require("./transporter")
const sendVerificationEmail = (email, userFirstName, token)=>{
    const options = {
    to:email,
    subject :"Verify your Account",
    replyTo:"jumia@gmail.com",
    html:`
          <div>
           Hi ${userFirstName},
           <p><a href="${process.env.client_domain}/verify/${token}"</a> Verify your Email</p>
          </div>
    `
}
    transporter.sendMail(options, (err, info)=>{
        if (err) {
            console.log(err.message);
            
        }else{
            console.log("Email sent successfully")
            console.log(info);
            
        }
    })
}

module.exports = sendVerificationEmail