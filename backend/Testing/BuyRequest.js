var nodemailer = require('nodemailer');
const sendEmail = require("../Testing/sendEmail");
const db = require("./db.js");


  const buyRequest = (req, res) => {
    //const { userEmail, name, offer} = req.body;
    var Buyer_ID = req.body.ID;
    var property_ID = req.body.S_ID;

    var buyer_name = req.body.name;
    var offer_price = req.body.offer;
    var offer_status = 'P'; //pending status
    let cols = [property_ID];
    db.query('SELECT Owner_ID, Realtor_ID, pic_dir from FOR_SALE where S_ID = ?', cols, (err, data) => {
      if(err) {
        console.log(err);
        res.json({
            success: false
        });
        return;
      }

      let owner_ID = data[0].Owner_ID;
      let main_pic = data[0].pic_dir + "/outside.png";
      //let realtor_ID = data[0].Realtor_ID;
      let col = [Buyer_ID, property_ID, owner_ID, buyer_name, offer_price, offer_status, main_pic];
      db.query('INSERT INTO BUYER_APPLICATION VALUES (?,?,?,?,?,?,?)', col, (err) =>{
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
            req.email = ownerEmail;
            req.title = "Buy Request";
            req.emailContent = emailContent;
            var temp = new sendEmail();
            temp.sendEmail(req, res);

    
    
        });
    });
  };


module.exports = buyRequest;