var nodemailer = require('nodemailer');
const sendEmail = require("../Testing/sendEmail");
const db = require("./db.js");


  const rentRequest = (req, res) => {
    //const { userEmail, name, offer} = req.body;
    var renter_ID = req.body.renter_ID;
    var property_ID = req.body.property_ID;
    let credit_score = req.body.credit_score;
    let employer = req.body.employer;
    let annual_salary = req.body.annual_salary;
    var renter_name = req.body.renter_name;
    var request_status = 'P'; //pending status
    let cols = [property_ID];
    db.query('SELECT Owner_ID, Realtor_ID, pic_dir from for_rent where R_ID = ?', cols, (err, data) => {
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
      let col = [renter_ID, property_ID, owner_ID, renter_name, credit_score, employer, annual_salary, request_status, main_pic];
      db.query('INSERT INTO renter_application VALUES (?,?,?,?,?,?,?,?,?)', col, (err) =>{
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
            let emailContent = "Hi " + ownerUsername + ", \n" + renter_name + " sent you an request for rent for property " + property_ID + ".";
            emailContent = emailContent + "\nPlease check your application list to approve/reject."
            req.email = ownerEmail;
            req.title = "Rent Request";
            req.emailContent = emailContent;
            var temp = new sendEmail();
            temp.sendEmail(req, res);

    
    
        });
    });
  };


module.exports = rentRequest;