const postDB = require('../models/forum')

module.exports = {

  // makeBlankPost(req, res, next) {
  //     const blankpost = {
  //       id:      null,
  //       title:   null,
  //       content: null,
  //       comment: null,
  //     };
  //     res.locals.posts = blankpost;
  //     next();
  //   },

index(req, res, next){
  postDB.findAll()
  .then((results) => {
    res.locals.posts = results;
    next()
  }).catch(err => next(err));
},

create(req, res, next) {
    console.log(req.body, 'body');
    postDB.save(req.body)
      .then(results => {
        res.locals.post = result;
        next();
      })
      .catch(err => next(err));
  },

  newpost (req, res, next) {
    res.locals.newpost = {
      post_title: "",
      post_content: "",
    }
    next()
  },

  getOne (req, res, next) {
      postDB.findOne(req.params.id)
      .then(result => {
        res.locals.post = result
        next()
      })
      .catch(err => {
        next(err)
      })
    },

    update (req, res) {
      console.log(Object.assign(req.body, {
        id: req.params.id
      }))
      postDB.update(Object.assign(req.body, {
        id: req.params.id
      }))
      .then(result => {
        res.json({
          message: 'ok',
          data: result
        })
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({
          message: 'error',
          error: err
        })
      })
    },

    delete (req, res) {
        postDB.destroy(req.params.id)
        .then(() => {
          res.json({
            message: 'ok'
          })
        })
        .catch(err => {
          res.status(500).json({
            message: 'error',
            error: err
          })
        })
      }
};
