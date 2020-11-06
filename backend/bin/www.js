const express = require("express");
const bodyParser = require("body-parser");
const login = require('../Testing/login');
const db = require('../Testing/db');
const signup = require('../Testing/signup');

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to cmpe202" });
});

app.post("/login", function(req, res) {
    console.log("Req Body : ", req.body);
    var temp = new login();
    temp.login(db, req, res);
  });

  app.post("/register", function(req, res) {
    console.log("Req Body : ", req.body);
    var temp = new signup();
    temp.register(db, req, res);
  });

// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});




// const express = require('express');
// const app = express();
// const path = require('path');
// const mysql = require('mysql');
// const session = require('express-session');
// const MySQLStore = require('express-mysql-session')(session);
// const Router = require('../routes/Router');
// const bodyParser = require('body-parser')
// // app.use(express.static(path.join(__dirname, 'build')));
// // app.use(express.json());

// /**
//  * database connection
//  */
// var cors = require("cors");

// //Database
// app.use(cors());
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '123456789',
//     // password: 'password',
//     database: 'cmpe202',
//     // insecureAuth : true
// });

// db.connect(function(err) {
//     if(err){
//         console.log('DB error');
//         throw err;
//         return false;
//     }
//     else{
//       console.log("Succesfully connect to DB")
//     }
    
// });

// const sessionStore = new MySQLStore({
//     expiration: (1825 * 86400 * 1000),
//     endConnectionOnClose: false
// }, db);

// app.use(session({
//     key: 'dslfjdslfjsdflksdjfs345',
//     secret: 'sdfjlsdfjalsd4564fjsdl',
//     store: sessionStore,
//     resave: false,
//     saveUninitialized: false,
//     cookie:{
//         maxAge: (1825 * 86400 * 1000),
//         httpOnly: false
//     }
// }));
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(express.json())
// new Router(app, db);

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// app.listen(9000, function(){
//   console.log("listing... port: 9000")
// });

