const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class allUserRouter{

         allUser(db, req, res) {
            let username = req.body.username;
            let password = req.body.password;

            let cols = [username];
            db.query('SELECT * FROM account WHERE username = ?', cols, (err, data, fields) => {

                if(err) {
                    console.log(err);
                    res.json({
                        success: false,
                        msg: 'Invalid username, please try again'
                    })
                    return;
                }
                console.log(data);
                // Found 1 user with this username
                if(data && data.length === 1) {
                    console.log(data[0].ID);

                    if(data[0].approved === 'P'){
                        res.json({
                          success: false,
                          msg: 'Your account has not been approved by administrator.'
                      });
                      return;
                      }

                    bcrypt.compare(password, data[0].psswd, (bcryptErr, verified) => { // Error verfied always return false;
                       
                        //console.log("backend verfied : " + verified);

                        if(verified) {
                            const user = {
                                id: data[0].ID,
                                username: data[0].username,
                                email: data[0].Email,
                                role: data[0].a_type
                            }
                            //console.log(user);
                            var token = jwt.sign({user}, 'cmpe202key', {expiresIn: "1h"});
                                //console.log(token);
                                res.json({
                                    success: true,
                                    token: token
                                });
                           
                            //console.log(token);
                            return;
                        }
                         if(bcryptErr){
                            console.log(bcryptErr);
                        }

                        else {
                            res.json({
                                success: false,
                                msg: 'Invalid password'
                            })
                        }
                    });
                }

                else {
                    res.json({
                        success: false,
                        msg: 'please try again'
                    })
                }

            });

        }
        
   
}
module.exports = allUserRouter;
