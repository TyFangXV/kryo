const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
const mail = async(header,message,text)=>{
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: '9fangdev@gmail.com', // generated ethereal user
      pass: 'xsmtpsib-bce51359a4e41a226bf7600de70c77cf0de51819e4b3f2bc36affc7c7984ccec-0YSEphLVWJZ7j2av', // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"kryo bot " <bot@kryx.tk>', // sender address
    to: "9fangdev@gmail.com", // list of receivers
    subject: header, // Subject line
    text: text, // plain text body
    html: `<h1>${message}</h1>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
