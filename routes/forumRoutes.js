const express = require('express')
const postsRouter = express.Router()
const postsController = require('../controllers/forumController')
const viewsController = require('../controllers/viewsController')


postsRouter.get('/', postsController.index, viewsController.showPosts)
postsRouter.post('/', postsController.create, viewsController.redirectToPost)
postsRouter.get('/new', postsController.newpost, viewsController.newPost)
postsRouter.get('/:id', postsController.getOne, viewsController.showPost)
postsRouter.get('/:id/edit', postsController.getOne, viewsController.editPost)
postsRouter.put('/:id', postsController.update)
postsRouter.delete('/:id', postsController.delete)

module.exports = postsRouter;
