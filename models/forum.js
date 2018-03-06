const db = require('../db/config')

module.exports ={

 findAll(){
  return db.many('SELECT * FROM posts ORDER BY id')
},

findById(id){
      return db.one(`
        SELECT posts.id AS id, title, content, comment
          FROM posts
          WHERE posts.id = $1
      `, id)},

save(post){
 return db.one(
  `INSERT INTO posts(title,content,comment)VALUES(
    $/title/,
    $/content/,
    $/comment/
  )RETURNING *`,post
)},

update(post) {
  return db.one(`
    UPDATE posts
    SET
    title = $/title/,
    content = $/content/,
    comment = $/comment/
    WHERE id = $/id/
    RETURNING *
    `, post);
},

destroy(id){
   return db.none(`DELETE FROM posts WHERE id =$1`,id)}
}
