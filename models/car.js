const db = require('../db/config')
const Car = {}

Car.findAll=()=>
db.query('SELECT * FROM benzdb')

Car.findById = id =>
  db.one('SELECT * FROM benzdb WHERE id = $1',[id])

Car.create = car => db.one(`
  INSERT INTO benzdb (
  name,
  num
  )
  VALUES (
  $/name/,
  $/num/
  )RETURNING *`,
  car
)

Car.update = car => db.one(`
  UPDATE benzdb SET
  name = $1,
  num = $2
  height = $4,
  weight = $5,
  type = $6
  WHERE id = $7
  RETURNING *`,
  [car.name,
  car.num,
  car.exp,
  car.height,
  car.weight,
  car.type,
  car.id])

module.exports = Car






// ________________
// module.exports = {
//   findAll(){
//     return dbconfig.query(
//       `SELECT * FROM benzdb`
//     );
//   },
// }



Car.findAll()
.then(results => console.log(results))
.catch(err => console.log(err));
