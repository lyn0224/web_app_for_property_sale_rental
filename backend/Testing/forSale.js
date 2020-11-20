const fs = require('fs');
const path = require('path');
//npm install express multer --save
class forSaleRouter{
        getMainImage(db, req, res) {
            // let username = req.body.username;
            // let userID = req.body.id;

             //let cols = ['%outside%'];
            db.query("SELECT * from for_sale WHERE sale_status = 'A'", (err, data) => {

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
                    data[i].pic_dir = data[i].pic_dir + '/outside.png'
                }
                //console.log(data[0].pic_dir)
                //console.log(data);
            
                res.json({
                    success: true,
                    dataset: data
                });
                return;
                
            });

        }

        getAllImage(db, req, res) {
            // let username = req.body.username;
            // let userID = req.body.id;

             //let cols = ['%outside%'];
            db.query("SELECT * from for_sale WHERE sale_status = 'A'", (err, data) => {

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
                console.log(data[0].pic_dir)
                console.log(data);
            
                res.json({
                    success: true,
                    dataset: data
                });
                return;
                
            });

        }


        updateListing(db, req, res) {
            //let fdata = req.body;
            //let cols = [fdata.owner, fdata.realtor, fdata.p_type, fdata.apt_num, fdata.street, fdata.city, fdata.state, fdata.zip, fdata.status, fdata.price, fdata.bedroom, fdata.bathroom, fdata.livingroom, fdata.flooring, fdata.parking, fdata.area, fdata.year, fdata.description, pic_path];
            let sql = "UPDATE for_sale SET status = 'S' WHERE S_ID = 1";
            //console.log(cols);
            db.query(sql, (err) => {

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
                success: true
                });
                return;
            });

        }

        deleteListing(db, req, res) {
            let sql = "DELETE from for_sale WHERE S_ID = 1";
            //console.log(cols);
            db.query(sql, (err) => {

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
                success: true
                });
                return;
            });

        }
 
}
module.exports = forSaleRouter;
