module.exports = {


  showPosts(req, res) {console.log('SHOW POSTS')
    res.render('forum/post-index', {
      data: res.locals.posts,
    });
    console.log(res.locals.posts)
  },

  showPost(req, res) {console.log('SHOW ONE')
    res.render('forum/post-single', {
      data: res.locals.post,
    });
  },

  newPost(req, res){
    console.log(res.locals)
    res.render('forum/post-add')
  },

  redirectToPost (req, res){
    console.log('REDIRECTING')
    res.redirect('forum/post-index')
  },

  editPost(req, res){
    console.log(res.locals.post)
    res.render('forum/post-edit')
  }

  };

  // showAddForm(req, res) {console.log('SHOW ADD Form')
  //   res.render('forum/post-add');
  // },

  // showEditForm(req, res) {console.log('SHOW EDIT FORM')
  //   res.render('forum/post-edit', {
  //     data: res.locals.post,
  //   });
  // },
  //
  // handleCreate(req, res) {console.log('HANDLE CREATE')
  //   res.redirect('/forum');
  // },
  // handleUpdate(req, res) {console.log('HANDLE UPDATE')
  //   res.redirect(`/forum/${req.params.id}`);
  // },
  // handleDelete(req, res) {console.log('HANDLE DELETE')
  //   res.redirect('/forum');
  // },
