const mysql = require('mysql');

//Database
const db = mysql.createConnection({
    host: 'cmpe202db.chnvttzxfbpw.us-west-1.rds.amazonaws.com',
    user: 'root',
    password: '123456789',
    // password: 'password',
    database: 'CMPE202',
    // insecureAuth : true
});

db.connect(function(err) {
    if(err){
        console.log('DB error');
        throw err;
        return false;
    }
    else{
      console.log("Succesfully connect to DB")
    }
    
});

module.exports = db;
