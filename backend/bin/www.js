const express = require("express");
const bodyParser = require("body-parser");
const login = require('../Testing/login');
const db = require('../Testing/db');
const signup = require('../Testing/signup');
const alluser = require('../Testing/alluser');
const uploadController = require("../Testing/uploadDb");
const upload = require("../Testing/upload");
const forSale = require('../Testing/forSale');
const search = require('../Testing/search');
const buyRequest = require("../Testing/BuyRequest");
const individualUser = require("../Testing/IndividualUser");
var cors = require("cors");

const app = express();
//app.set("view engine", "ejs");

app.use("/forSale_pic", express.static("public/forSale"));
// parse requests of content-type: application/json
app.use(bodyParser.json());
app.use(cors());

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

app.get("/get_user", function(req, res) {
    console.log("Req Body : ", req.body);
    var temp = new alluser();
    temp.allUser(db, req, res);
  });

  app.post("/update_user", function(req, res) {
    console.log("Req Body : ", req.body);
    var temp = new alluser();
    temp.updateUser(db, req, res);
  });

  app.post("/remove_user", function(req, res) {
    console.log("Req Body : ", req.body);
    var temp = new alluser();
    temp.removeUser(db, req, res);
  });

  //get house info for Buy page
    app.get("/house", function(req, res) {
      console.log("Req Body : ", req.body);
      var temp = new forSale();
      temp.getAllImage(db, req, res);
    });

  // list house for sale
  app.post("/upload", upload.fields([{ name: 'main', maxCount: 1 }, { name: 'other', maxCount: 10 }]), uploadController.uploadFiles);

  // schedule open house
  app.post("/openHouse", function(req, res){
    console.log("Req Body: ", req.body);
    var temp = new forSale();
    temp.openHouse(db, req, res);
  });

    // delete listed house for sale
    app.post("/deleteForSale", function(req, res){
      console.log("Req Body: ", req.body);
      var temp = new forSale();
      temp.deleteListing(db, req, res);
    });

    // update information of the listed house for sale
    app.post("/updateForSale", function(req, res){
      console.log("Req Body: ", req.body);
      var temp = new forSale();
      temp.updateListing(db, req, res);
    });

    //get all the house listed for sale for a particular user based on user ID
    app.post('/users/:ID/forSaleListing', function (req, res) {
      console.log("Req Body: ", req.body);
      var temp = new individualUser();
      temp.forSaleListing(db, req, res);
    });

    //get all buyer application a particular user based on user ID
    app.post('/users/:ID/buyerApplication', function (req, res) {
      console.log("Req Body: ", req.body);
      var temp = new individualUser();
      temp.buyerApplication(db, req, res);
    });

    // approve buyer application
    app.post('/approveBuy', function (req, res) {
      console.log("Req Body: ", req.body);
      var temp = new forSale();
      temp.approveBuy(db, req, res);
    });

    // reject buyer application
    app.post('/rejectBuy', function (req, res) {
      console.log("Req Body: ", req.body);
      var temp = new forSale();
      temp.rejectBuy(db, req, res);
    });

  //Buy Request
  app.post("/buyRequest", buyRequest);


//main search
  app.get('/api/search', async function (req, res) {
    try {
      const s = new search();
      const data = await s.begin(db, req);
      res.json({ success: true, ...data });
    } catch (ex) {
      res.json({ success: false, msg: ex.msg || ex.message || ex });
    }
  })

// set port, listen for requests
app.listen(9000, () => {
  console.log("Server is running on port 9000.");
});
