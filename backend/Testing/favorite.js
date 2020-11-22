class FavoriteRouter {
    async execSQL(db, sql) {
      console.log('sql :', sql);
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
    async beginTran(db) {
      return new Promise((resolve, reject) => {
        db.beginTransaction((err) => {
          if (err) {
            reject(err);
          } else {
            resolve(true);
          }
        })
      })
    }
  
  
    async homeList(db, req) {
      const { page, size } = req.query;
      return {};
    }
  
    /**
     * save data to favorite_home
     *
     * @param {*} db
     * @param {*} req
     * @returns
     * @memberof FavoriteRouter
     */
    async homeAdd(db, req) {
      const { U_ID, home_type, properity_id } = req.body;
      if (!U_ID) {
        throw Error('user id not empty');
      }
      if (!home_type) {
        throw Error('home type not empty');
      }
      if (!properity_id) {
        throw Error('properity id not empty');
      }
      let sql = `insert into favorite_home(U_ID, home_type, properity_id)values(${U_ID}, '${home_type}', ${properity_id})`;
      await this.execSQL(db, sql);
      return { msg: 'add success' }
    }
  
    /**
     * delete record from favorite_home
     *
     * @param {*} db
     * @param {*} req
     * @param {*} res
     * @returns
     * @memberof FavoriteRouter
     */
    async homeDelete(db, req, res) {
      const { U_ID, home_type, properity_id } = req.body;
      if (!U_ID) {
        throw Error('user id not empty');
      }
      if (!home_type) {
        throw Error('home type not empty');
      }
      if (!properity_id) {
        throw Error('properity id not empty');
      }
      let sql = `delete from favorite_home where  U_ID = ${U_ID} and home_type = '${home_type}' and properity_id = ${properity_id}`
      await this.execSQL(db, sql);
      return { msg: 'delete success' }
    }
  
  
    /**
     * save data to favorite_search
     *
     * @param {*} db
     * @param {*} req
     * @returns
     * @memberof FavoriteRouter
     */
    async searchAdd(db, req) {
      const { U_ID, search_type, min_price = 0, max_price = 0, bedroom = 0, bathroom = 0, home_type = '', zip_code = 0 } = req.body;
      if (!U_ID) {
        throw Error('user id not empty');
      }
      if (!home_type) {
        throw Error('home type not empty');
      }
      if (!search_type) {
        throw Error('search type not empty');
      }
      let sql = `insert favorite_search(U_ID, search_type, min_price, max_price, bedroom, bathroom, home_type, zip_code)values(
        ${U_ID}, '${search_type}', ${min_price}, ${max_price}, '${bedroom}', '${bathroom}', '${home_type}', ${zip_code}'
      )`
      await this.execSQL(db, sql);
      return { msg: 'add success' }
    }
  
    /**
     * delete record from favorite_search;
     *
     * @param {*} db
     * @param {*} req
     * @returns
     * @memberof FavoriteRouter
     */
    async searchDelete(db, req) {
      const { id } = req.query;
      if (id) {
        throw Error('id not empty');
      }
      let sql = `delete from favorite_search where id = ${id}`;
      await this.execSQL(db, sql);
      return { msg: 'delete success' }
    }
  
    /**
     * list
     *
     * @param {*} db
     * @param {*} req
     * @returns
     * @memberof FavoriteRouter
     */
    async searchList(db, req) {
      const { page = 1, size = 10 } = req;
      const _page = Number(page) || 1;
      const _size = Number(size) || 10
      let sql = `select * from favorite_search t limit ${(_page - 1) * _size},${_size} `;
      const list = await this.execSQL(db, sql);
      sql = `select count(1) total from favorite_search`;
      const totalInfo = await this.findOne(db, sql);
  
      return { page, size, list, total: totalInfo.total }
    }
  
    /**
     * get detail by id
     *
     * @param {*} db
     * @param {*} req
     * @returns
     * @memberof FavoriteRouter
     */
    async searchDetail(db, req) {
      const { id } = req.params;
      if (!id) {
        throw Error('id not empty');
      }
      let sql = `select * from favorite_search t where t.id = ${id}`;
      const detail = await this.findOne(db, sql);
      if (!detail) {
        throw Error('detail not exists');
      }
      return detail;
    }
  
  }
  
  
  module.exports = FavoriteRouter;