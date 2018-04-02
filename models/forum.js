const db = require('../db/config')

module.exports ={
 findAll(){
  return db.many('SELECT * FROM posts ORDER BY id')
},

findOne(id){return db.one(`SELECT * FROM posts WHERE id = $1`, id)},

save(post){
  return db.one(`INSERT INTO posts(post_title, post_content)
  VALUES ($/post_title/, $/post_content/) RETURNING *`, post)
},


update (post) {
  return db.one('UPDATE posts \
  SET post_title=$[post_title], post_content=$[post_content]\
  WHERE id=$[id] \
  RETURNING *', post)
},

destroy(id){
   return db.none(`DELETE FROM posts WHERE id =$1`,id)}
}
