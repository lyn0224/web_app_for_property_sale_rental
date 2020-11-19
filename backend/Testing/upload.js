const multer = require("multer");
const db = require('../Testing/db');
var fs = require('fs');

const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb("Please upload only images.", false);
  }
};

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
      pic_path = 'public/forSale/';
      db.query('SELECT MAX(S_ID) AS ID FROM for_sale', (err, data) => {
        if(err) {
          console.log(err);
          res.json({
              success: false
          });
          return;
        }

        if(data[0].ID === null){
          pic_path = pic_path + '1/';
          !fs.existsSync(pic_path) && fs.mkdirSync(pic_path);
          cb(null, pic_path);
          
          }
        else{
          //console.log(data);
          pic_path = pic_path + (data[0].ID+1) + '/';
          !fs.existsSync(pic_path) && fs.mkdirSync(pic_path);
          cb(null, pic_path);
          
        }

      });
      //console.log(pic_path);
      //cb(null, pic_path);
    },

    filename: function(req, file, cb) {
        
        cb(null, file.originalname);
    }
});

var uploadFile = multer({ storage: storage, fileFilter: imageFilter });
module.exports = uploadFile;