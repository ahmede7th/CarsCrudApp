const express = require('express')
const postsRouter = express.Router()
const postsController = require('../controllers/forumController')
const views = require('../controllers/viewsController')
// carRoutes.get('/',(req,res)=>{
//   res.render('forum/forum')
// })

postsRouter.get('/:id/edit', postsController.getOne, views.showEditForm, views.show404);
postsRouter.get('/new',postsController.makeBlankPost, views.showAddForm, views.show404);

postsRouter.route('/:id')
  .get(postsController.getOne, views.showOne, views.show404)
  .put(postsController.update, views.handleUpdate, views.show406)
  .delete(postsController.destroy, views.handleDelete, views.show404);

postsRouter.route('/')
  .get(postsController.index, views.showPosts)
  .post(postsController.create, views.handleCreate, views.show406);
module.exports = postsRouter;
