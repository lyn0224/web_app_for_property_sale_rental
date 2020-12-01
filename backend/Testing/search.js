const jwt = require('jsonwebtoken');

class searchRouter {

  get TableName() {
    const sql = `
    (
      select 'r' search_type, R_ID,Owner_ID,Realtor_ID,property_type,apt_num,'' street_num,street,city,state,zip, '' sale_status, 0 price,   available_date,     rate,   lease_term,  security_deposit, bedroom,bathroom, '' living,    parking,flooring,0 area, '' size_sqft,   year_built,    ammenities, pic_dir from CMPE202.FOR_RENT
      union all
      select 'b' search_type, S_ID,Owner_ID,Realtor_ID,property_type,apt_num,'' street_num,street,city,state,zip, sale_status,      price,  '' available_date, 0 rate, 0 lease_term,0 security_deposit, bedroom,bathroom,'' livingroom,parking,flooring,  area, 0 size_sqft, year_built, '' ammenities, pic_dir from CMPE202.FOR_SALE
    )
    `
    return sql;
  }

  async execSQL(db, sql) {
    console.log(`ExecuteSQL: [ ${sql} ]`);
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

  async saveSearchKeyword(db, keyword, token, search_type, min_price, max_price, bedroom, bathroom, home_type, zip_code,
    year_built, flooring, house_size, parking) {
    if (!token) {
      return;
    }
    // console.log('-11--');
    const [isExpired, tokenInfo] = await new Promise((resolve, reject) => {
      jwt.verify(token, 'cmpe202key', (err, decoded) => {
        if (err) {
          resolve([false, null]);
        } else {
          resolve([true, decoded.user])
        }
      });
    })
    // console.log('-12--');
    if (!isExpired) {
      return;
    }
    // console.log('-13--');
    const { id } = tokenInfo;

    if (!search_type) {
      return;
    }
    // U_ID, search_type
    const keys = ['U_ID', 'search_type'];
    const values = [id, `'${search_type}'`];

    if (min_price) {
      keys.push('min_price');
      values.push(min_price);
    }
    if (max_price) {
      keys.push('max_price');
      values.push(max_price);
    }
    if (bedroom) {
      keys.push('bedroom');
      values.push(bedroom);
    }
    if (bathroom) {
      keys.push('bathroom');
      values.push(bathroom);
    }
    if (home_type) {
      keys.push('home_type');
      values.push( `'${home_type}'`);
    }
    if (zip_code) {
      keys.push('zip_code');
      values.push(zip_code);
    }
    if (year_built) {
      keys.push('year_built');
      values.push(year_built);
    }
    if (flooring) {
      keys.push('flooring');
      values.push( `'${flooring}'` );
    }
    if (house_size) {
      keys.push('house_size');
      values.push(house_size);
    }
    console.log('parking:',parking);
    if ( parking) {
      keys.push(' parking');
      values.push( parking);
    }
   

    let sql = `insert into favorite_search (${keys.join(',')})values(${values.join(',')})`

    console.log('save success.....');
    try {
      await this.execSQL(db, sql);
    } catch (ex) {
      console.log(ex);
    }
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
    const { keyword = '', page, size, search_type, min_price, max_price, bedroom, bathroom, home_type, zip_code,
    year_built, flooring, house_size, parking} = req.query;
    // const p = Number(page || 1) || 1;
    // const s = Number(size || 10) || 10;
    // save search keywor to favorite_search table

    console.log('token',min_price)

    this.saveSearchKeyword(db, keyword, token, search_type, min_price, max_price, bedroom, bathroom, home_type||search_type, zip_code,
      year_built, flooring, house_size, parking);

    let where = `(t.street like '%${keyword}%' or t.city like '%${keyword}%' )`

    if (min_price) {
      where += ` and t.price>= ${min_price}`;
    }
    if (max_price) {
      where += ` and t.price <= ${max_price}`;
    }
    if (bedroom) {
      where += ` and t.bedroom <= ${bedroom}`;
    }
    if (bathroom) {
      where += ` and t.bathroom <= ${bathroom}`;
    }
    if(zip_code){
      where += ` and t.zip like '%${zip_code}%'`;
    }
    if(flooring){
      where += ` and t.flooring like '%${flooring}%'`;
    }
    if(year_built)
    {   
      where += ` and t.year_built like '%${year_built}%' `
    }
    if(house_size){
      where += ` and t.area = ${house_size}`
    }
    if(parking){
      where += ` and t.parking = ${parking}`
    }

    console.log('parking:',parking, where)

    // let tmpView = `select * from ${this.TableName} tt where tt.search_type = '${search_type}'`
    let tmpView = `select * from ${this.TableName} tt `;
    if (search_type) {
      tmpView += ` where tt.search_type = '${search_type}'`;
    }

    let sql = `select * from (${tmpView})t where ${where} `
    const list = await this.execSQL(db, sql);
    return { list }
  }
}


module.exports = searchRouter;
