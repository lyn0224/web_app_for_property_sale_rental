var nodemailer = require('nodemailer');
const db = require("./db.js");
// npm install nodemailer --save
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

  const buyRequest = (req, res) => {
    //const { userEmail, name, offer} = req.body;
    var Buyer_ID = req.body.ID;
    var property_ID = req.body.S_ID;

    var buyer_name = req.body.name;
    var offer_price = req.body.offer;
    var offer_status = 'P'; //pending status
    let cols = [property_ID];
    db.query('SELECT Owner_ID, Realtor_ID from for_sale where S_ID = ?', cols, (err, data) => {
      if(err) {
        console.log(err);
        res.json({
            success: false
        });
        return;
      }

      let owner_ID = data[0].Owner_ID;
      //let realtor_ID = data[0].Realtor_ID;
      let col = [Buyer_ID, property_ID, owner_ID, buyer_name, offer_price, offer_status];
      db.query('INSERT INTO buyer_application VALUES (?,?,?,?,?,?)', col, (err) =>{
        if(err) {
            console.log(err);
            res.json({
                success: false
            });
            return;
        }
        //console.log("Calling Send Email");
      });

      //send email to owner
        var ownerEmail;
        var ownerUsername;
        db.query('SELECT username, Email from ACCOUNT where ID = ?', [owner_ID], (err, data) =>{
            if(err) {
              console.log(err);
              res.json({
                  success: false
              });
              return;
            }
    
            ownerUsername = data[0].username;
            ownerEmail = data[0].Email;
            let emailContent = "Hi " + ownerUsername + ", \n" + buyer_name + " sent you an offer of $" + offer_price + " for property " + property_ID + ".";
            emailContent = emailContent + "\nPlease check your application list to approve/reject."
            let message = {
                from: 'lyn12345yin@yahoo.com',
                to: ownerEmail,
                subject: "Buy Request",
                text: emailContent,
              };
            
              transporter
                .sendMail(message)
                .then(() => {
                  return res
                    .status(200)
                    .json({ msg: "you should receive an email from us" });
                })
                .catch((error) => console.error(error));
    
    
        });
    });
  };


module.exports = buyRequest;