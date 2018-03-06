const postDB = require('../models/forum')

module.exports = {

  makeBlankPost(req, res, next) {
      const blankpost = {
        id:      null,
        title:   null,
        content: null,
        comment: null,
      };
      res.locals.posts = blankpost;
      next();
    },

index(req, res, next){
  postDB.findAll()
  .then((posts) => {
    res.locals.posts = posts;
    next()
  }).catch(err => next(err));
},

getOne(req, res, next) {
    postDB.findById(req.params.id)
      .then((post) => {
        console.log('getOne');
        res.locals.post = post;
        next();
      })
      .catch(err => next(err));
  },

create(req, res, next) {
    console.log(req.body, 'body');
    postDB.save(req.body)
      .then((post) => {
        res.locals.post = post;
        next();
      })
      .catch(err => next(err));
  },



update(req, res, next) {
  console.log(req.body, 'update controller');
  postDB.update(req.body)
    .then((post) => {
      res.locals.post = post;
      next();
    })
    .catch(err => next(err));
},

destroy(req,res,next){
  postDB.destroy(req.params.id)
  .then(() => next())
      .catch(err => next(err));
    },
};
