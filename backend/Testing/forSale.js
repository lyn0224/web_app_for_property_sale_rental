const path = require('path');
//npm install express multer --save
class forSaleRouter{

         

        getAllImage(db, req, res) {
            // let username = req.body.username;
            // let userID = req.body.id;

             //let cols = ['%outside%'];
            db.query('SELECT * from for_sale', (err, data) => {

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

        
        
        
   
}
module.exports = forSaleRouter;
