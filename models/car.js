const dbconfig = require('../db/config');



module.exports = {
  findAll(){
    return dbconfig.query(
      `SELECT * FROM benzdb`
    );
  },
}



module.exports.findAll()
.then(results => console.log(results))
.catch(err => console.log(err));
