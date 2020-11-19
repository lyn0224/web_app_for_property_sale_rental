var nodemailer = require('nodemailer');
//const Mailgen = require("mailgen");

let transporter = nodemailer.createTransport({
  service: 'yahoo',
  host: 'smtp.mail.yahoo.com',
  port: 465,
  secure: false,
  auth: {
    user: 'lyn12345yin@yahoo.com',
    pass: 'obkshrugxrapkoza'
  }
});

// let MailGenerator = new Mailgen({
//     theme: "default",
//     product: {
//       name: "Nodemailer",
//       link: MAIN_URL,
//     },
//   });

  const signup = (req, res) => {
    //const { userEmail, name } = req.body;

    // then send the email
    // let response = {
    //   body: {
    //     name,
    //     intro: "Someone sent you a buy request",
    //   },
    // };
  
    // let mail = MailGenerator.generate(response);
  
    let message = {
      from: 'lyn12345yin@yahoo.com',
      to: 'lyn0224@hotmail.com',
      subject: "Buy Request",
      text: "Hello!",
    };
  
    transporter
      .sendMail(message)
      .then(() => {
        return res
          .status(200)
          .json({ msg: "you should receive an email from us" });
      })
      .catch((error) => console.error(error));
  };

// var mailOptions = {
//   from: 'dongmei.yin@sjsu.edu',
//   to: 'lyn0224@hotmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });

module.exports = signup;