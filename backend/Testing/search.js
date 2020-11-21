const jwt = require('jsonwebtoken');

class searchRouter {

  get TableName() {
    const sql = `
    (
      select R_ID,Owner_ID,Realtor_ID,property_type,apt_num,street_num,street,city,state,zip, '' sale_status, 0 price,   available_date,     rate,   lease_term,  security_deposit, bedroom,bathroom,living,    parking,flooring,0 area, size_sqft,   year_built,    ammenities, pic_dir from FOR_RENT
      union all
      select S_ID,Owner_ID,Realtor_ID,property_type,apt_num,street_num,street,city,state,zip, sale_status,      price,  '' available_date, 0 rate, 0 lease_term,0 security_deposit, bedroom,bathroom,livingroom,parking,flooring,  area, 0 size_sqft, year_built, '' ammenities, pic_dir from FOR_SALE
    )
    `
    return sql;
  }

  async execSQL(db, sql) {
    // console.log('sql:', sql);
    return new Promise((resolve, reject) => {
      db.query(sql, (err, rows, fields) => {
        if (err) {
          reject(err)
        } else {
          resolve(rows);
        }
      })
    })
  }

  async findOne(db, sql) {
    const list = await this.execSQL(db, sql);
    return list.length > 0 ? list[0] : null;
  }

  async saveSearchKeyword(db, keyword, token) {
    if (!token) {
      return;
    }
    const tokenInfo = jwt.verify(token, 'cmpe202key');
    console.log(tokenInfo);
    // to do...
  }

  /**
   * keyword search
   *
   * @param {*} db
   * @param {*} req
   * @returns
   * @memberof searchRouter
   */
  async begin(db, req) {
    console.log('----------', req.headers.token)
    const token = req.headers.token;


    const { keyword, page, size } = req.query;
    // const p = Number(page || 1) || 1;
    // const s = Number(size || 10) || 10;
    // save search keywor to favorite_search table
    await this.saveSearchKeyword(db, keyword, token);
    const where = `t.street like '%${keyword}%' or t.city like '%${keyword}%' or t.zip like '%${keyword}%' or t.flooring like '%${keyword}%'`
    // let sql = `select * from ${this.TableName} t where ${where} limit ${(p - 1) * s},${s}`
    // const list = await this.execSQL(db, sql);
    // sql = `select count(1) total from ${this.TableName} t where ${where} `;
    // const totalInfo = await this.findOne(db, sql);
    // return { page: p, size: s, total: totalInfo.total || 0, list }
    let sql = `select * from ${this.TableName} t where ${where} `
    const list = await this.execSQL(db, sql);
    return { list }
  }
}

module.exports = searchRouter;
  