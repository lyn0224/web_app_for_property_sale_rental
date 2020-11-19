const db = require('../Testing/db');

const uploadFiles = async (req, res) => {
  try {
    console.log(req.files);
    console.log(req);
    if (req.files == undefined) {
        res.json({
            success: false,
            msg: "please select a file to upload"
        });
        return;
    }

    
    db.query('SELECT MAX(S_ID) AS ID FROM for_sale', (err, data) => {
      if(err) {
        console.log(err);
        res.json({
            success: false,
            msg: ''
        })
        return;
      }

      if(data[0].ID === null){pic_path = 'http://localhost:9000/property_pic/1';}
      else{pic_path = 'http://localhost:9000/property_pic/' + (data[0].ID + 1);}
      
      let fdata = req.body;
      let cols = [fdata.owner, fdata.realtor, fdata.p_type, fdata.apt_num, fdata.street, fdata.city, fdata.state, fdata.zip, fdata.status, fdata.price, fdata.bedroom, fdata.bathroom, fdata.livingroom, fdata.flooring, fdata.parking, fdata.area, fdata.year, fdata.description, pic_path];
      //console.log(cols);
    db.query('INSERT INTO for_sale (Owner_ID,Realtor_ID,property_type,apt_num,street,city,state,zip,sale_status,price,bedroom,bathroom,livingroom,flooring,parking,area,year_built,description,pic_dir) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', cols, (err) => {

        if(err) {
            console.log(err);
            res.json({
                success: false,
                msg: ''
            })
            return;
        }
        //console.log(data);
        res.json({
            success: true
        });
        return;
    });



    });
    

  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload images: ${error}`);
  }
};

module.exports = {
  uploadFiles,
};