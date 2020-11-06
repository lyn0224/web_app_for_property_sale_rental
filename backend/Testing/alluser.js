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
        
   
}
module.exports = allUserRouter;
