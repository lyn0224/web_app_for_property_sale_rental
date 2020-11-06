const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class signupRouter{
   
        register (db, req, res) {
            
      
      
              let username = req.body.username;
              let password = bcrypt.hashSync(req.body.password, 9);//req.body.password;
              let email = req.body.emailAddress;

              let col1 = [username];
              let col2 = [email];
              db.query('SELECT * FROM account WHERE username = ?', col1, (err, checkName) => {
                console.log(checkName);
                if(err) {
                    console.log(err);
                    res.json({
                        success: false,
                        msg: 'Error, please try again'
                    });
                    return;
                }

                if(checkName.length===0){
                    db.query('SELECT * FROM account WHERE Email = ?', col2, (err, checkEmail) => {
                        console.log(checkEmail);
                        if(err) {
                            console.log(err);
                            res.json({
                                success: false,
                                msg: 'Error, please try again'
                            });
                            return;
                        }
                        if(checkEmail.length===0){
                            db.query(
                                'insert into account(username,Email,psswd,a_type,approved) values (?, ?, ?, ?,?)',
                                [username, email, password, 'R','P'],
                                (err) => {
                                  if(err) {
                                      // console.log(err);
                                    return res.send({
                                      success: false,
                                      msg: 'register failed',
                                      err,
                                    }).end();
                                  }
                      
                                  res.send({
                                    success: true,
                                    msg: 'register success'
                                  }).end();
                                }
                              );
                        } else {
                            res.json({
                                success: false,
                                msg: 'Email already exists, please try another one'
                            });
                            return;
                        }
                    });
 
                } else {
                    res.json({
                        success: false,
                        msg: 'Username already exists, please try another one'
                    });
                    return;
                }
                
              });
              
      
           
          }
}
module.exports = signupRouter;
