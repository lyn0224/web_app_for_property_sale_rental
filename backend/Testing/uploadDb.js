const db = require('../Testing/db');

const uploadFiles = async (req, res) => {
  try {

    sql = '';
   

    if(req.body.list_type === 'sell'){
      file_path =  'http://localhost:9000/forSale_pic/';
      sql = 'SELECT MAX(S_ID) AS ID FROM for_sale';
    } else{
      file_path = 'http://localhost:9000/forRent_pic/';
      sql = 'SELECT MAX(R_ID) AS ID FROM for_rent';
    }

     
      picture_path = file_path + f_num;

      let fdata = req.body;
      if(req.body.list_type == 'sell'){
        cols = [fdata.owner, fdata.realtor, fdata.p_type, fdata.apt_num, fdata.street, fdata.city, fdata.state, fdata.zip, fdata.status, fdata.price, fdata.bedroom, fdata.bathroom, fdata.livingroom, fdata.flooring, fdata.parking, fdata.area, fdata.year, fdata.description, picture_path];
        sql2 = 'INSERT INTO for_sale (Owner_ID,Realtor_ID,property_type,apt_num,street,city,state,zip,sale_status,price,bedroom,bathroom,livingroom,flooring,parking,area,year_built,description,pic_dir) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
      } else{
        cols = [fdata.Owner_ID, fdata.Realtor_ID, fdata.property_type, fdata.apt_num, fdata.street, fdata.city, fdata.state, fdata.zip, fdata.available_date, fdata.rate, fdata.lease_term, fdata.security_deposit, fdata.bedroom, fdata.bathroom, fdata.livingroom, fdata.parking, fdata.flooring, fdata.area, fdata.year, fdata.ammenities, fdata.description, picture_path];
        sql2 = 'INSERT INTO for_rent (Owner_ID,Realtor_ID,property_type,apt_num,street,city,state,zip,available_date, rate, lease_term, security_deposit, bedroom,bathroom,livingroom,parking,flooring,area,year_built,ammenities, description,pic_dir) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
      }

    
      db.query(sql2, cols, (err) => {

        if(err) {
            console.log(err);
            res.json({
                success: false,
                msg: ''
            })
            return;
        }

        res.json({
            success: true
        });
        return;
      });


    
    

  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload images: ${error}`);
  }
};

module.exports = {
  uploadFiles
};