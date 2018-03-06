module.exports = {

  show404(err, req, res, next) {
    res.sendStatus(404);
  },
  show406(err, req, res, next) {
    res.sendStatus(406);
  },
  showPosts(req, res) {console.log('SHOW POSTS')
    res.render('forum/post-index', {
      data: res.locals.posts,
    });
  },
  showOne(req, res) {
    res.render('forum/post-single', {
      data: res.locals.post,
    });
  },
  showAddForm(req, res) {
    res.render('forum/post-add');
  },
  showEditForm(req, res) {

    res.render('forum/post-edit', {
      data: res.locals.post,
    });
  },
  handleCreate(req, res) {
    res.redirect('/forum');
  },
  handleUpdate(req, res) {
    res.redirect(`/forum/${req.params.id}`);
  },
  handleDelete(req, res) {
    res.redirect('/forum');
  },
};
