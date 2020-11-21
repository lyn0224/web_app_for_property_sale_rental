const fs = require('fs');
const path = require('path');
const db = require('../Testing/db');
//npm install express multer --save
class individualUser{

        forSaleListing(db, req, res) {
            db.query("SELECT * from for_sale WHERE Owner_ID = ?", [req.body.ID], (err, data) => {

                if(err) {
                    console.log(err);
                    res.json({
                        success: false,
                        msg: 'false'
                    })
                    return;
                }

                var i;
                for(i=0; i<data.length; i++){
                    //data[i].pic_dir = data[i].pic_dir + '/outside.png'
                    let pic_folder = data[i].pic_dir
                    let pic_folder_path = pic_folder.substring(pic_folder.lastIndexOf("/")+1);
                    let directory_name = 'public/forSale/' + pic_folder_path;
                    console.log(directory_name);
                    let filenames = fs.readdirSync(directory_name);
                    console.log(filenames);
                    var pic_array = [];
                    var j;
                    for(j=0; j<filenames.length; j++){
                        pic_array.push(pic_folder + "/" + filenames[j]);
                    }
                    console.log(pic_array);
                    data[i].pic_dir = pic_array;
                    data[i].main_dir = pic_folder + "/outside.PNG";
                }
                res.json({
                    success: true,
                    dataset: data
                });
                return;
                
            });

        }


        buyerApplication(db, req, res) {
            //let fdata = req.body;
            //let cols = [fdata.owner, fdata.realtor, fdata.p_type, fdata.apt_num, fdata.street, fdata.city, fdata.state, fdata.zip, fdata.status, fdata.price, fdata.bedroom, fdata.bathroom, fdata.livingroom, fdata.flooring, fdata.parking, fdata.area, fdata.year, fdata.description, pic_path];
            let sql = "UPDATE for_sale SET status = 'S' WHERE S_ID = 1";
            //console.log(cols);
            db.query("SELECT * from buyer_application WHERE owner_ID = ?", [req.body.ID], (err, data) => {

                if(err) {
                    console.log(err);
                    res.json({
                    success: false,
                    msg: ''
                    });
                    return;
                }
                //console.log(data);
                res.json({
                success: true,
                dataset: data
                });
                return;
            });

        }

        favSearch(db, req, res) {
            
            db.query("SELECT * from favorite_search WHERE U_ID = ?", [req.body.ID], (err, data) => {

                if(err) {
                    console.log(err);
                    res.json({
                    success: false,
                    msg: ''
                    });
                    return;
                }
                //console.log(data);
                

                res.json({
                    success: true,
                    dataset: data
                    });
                    return;
            });

        }

        favHouse(db, req, res) {
            db.query("SELECT * from favorite_home WHERE U_ID = ?", [req.body.ID], (err, data) => {

                if(err) {
                    console.log(err);
                    res.json({
                    success: false,
                    msg: ''
                    });
                    return;
                }
                //console.log(data);
                res.json({
                    success: true,
                    dataset: data
                    });
                    return;
            });

        }
 
}
module.exports = individualUser;
