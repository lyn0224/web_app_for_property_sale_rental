const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class allUserRouter{

         allUser(db, req, res) {
            // let username = req.body.username;
            // let password = req.body.password;

            // let cols = [username];
            db.query('SELECT * FROM account', (err, data, fields) => {

                if(err) {
                    console.log(err);
                    res.json({
                        success: false,
                        msg: ''
                    })
                    return;
                }
                console.log(data);
                res.json({
                    success: true,
                    dataset: data
                });
                return;
            });

        }


        updateUser(db, req, res) {
            // let username = req.body.username;
             let userID = req.body.id;

             let cols = ['Y', userID];
            db.query('UPDATE account SET approved = ? where ID = ?', cols, (err) => {

                if(err) {
                    console.log(err);
                    res.json({
                        success: false,
                        msg: ''
                    })
                    return;
                }
            
                db.query('SELECT * FROM account', (err, data, fields) => {
                    if(err) {
                        console.log(err);
                        res.json({
                            success: false,
                            msg: ''
                        })
                        return;
                    }
                    console.log(data);
                    res.json({
                        success: true,
                        dataset: data
                    });
                    return;
                });
            });

        }
        
        
   
}
module.exports = allUserRouter;
