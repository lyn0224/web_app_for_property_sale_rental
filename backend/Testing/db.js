const mysql = require('mysql');

//Database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    // password: 'password',
    database: 'cmpe202',
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
