const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const Router = require('../routes/Router');
const bodyParser = require('body-parser')
// app.use(express.static(path.join(__dirname, 'build')));
// app.use(express.json());

/**
 * database connection
 */
var cors = require("cors");

//Database
app.use(cors());
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

const sessionStore = new MySQLStore({
    expiration: (1825 * 86400 * 1000),
    endConnectionOnClose: false
}, db);

app.use(session({
    key: 'dslfjdslfjsdflksdjfs345',
    secret: 'sdfjlsdfjalsd4564fjsdl',
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge: (1825 * 86400 * 1000),
        httpOnly: false
    }
}));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
new Router(app, db);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000, function(){
  console.log("listing... port: 9000")
});