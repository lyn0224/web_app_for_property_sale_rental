const fs = require('fs');
const path = require('path');
//npm install express multer --save
class forSaleRouter{

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

                //openhouse
                db.query("SELECT * from open_house order by S_ID ASC", (err, openHouse) => {
                    var i;
                    console.log("open house");
                    console.log(openHouse);
                    var k = 0;
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
                        console.log("test");
                        if(k < openHouse.length && openHouse[k].S_ID === data[i].S_ID){
                            data[i].open_house = openHouse[k];
                            k++;
                        }
                    }
               
                    if(err) {
                        console.log(err);
                        res.json({
                            success: false,
                            msg: 'false'
                        })
                        return;
                    }
               
               
                    res.json({
                        success: true,
                        dataset: data
                    });
                    return;
                });
                
                //console.log(data[0].pic_dir);
                //console.log(data);
            

                
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
            //console.log(cols);
            let dir = 'public/forSale/' + req.body.S_ID;
            db.query("DELETE from for_sale WHERE S_ID = ?", [req.body.S_ID], (err) => {

                if(err) {
                    console.log(err);
                    res.json({
                    success: false,
                    msg: ''
                    });
                    return;
                }
                // once deleted from database, delete pictures in the forSale folder
                fs.rmdir(dir, { recursive: true }, (err) => {
                    if (err) {
                        throw err;
                    }
                    console.log(`${dir} is deleted!`);
                });
                res.json({
                success: true
                });
                return;
            });

        }

        openHouse(db, req, res) {
            let property_ID = req.body.S_ID;
            let from_date = req.body.from_date;
            let to_date = req.body.to_date;
            let cols = [property_ID, from_date, to_date]
            //console.log(cols);
            db.query("INSERT INTO open_house VALUES (?,?,?)", cols, (err) => {

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
