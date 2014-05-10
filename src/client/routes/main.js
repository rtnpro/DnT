/* Routes */

Router.map(function () {
  this.route('index', {
    path: '/',
    action: function () {
      this.render('index');
    }
  });

  this.route('projects', {
    path: '/projects/',
    action: function () {
      this.render('project');
    }
  });

  this.route('project', {
    path: '/project/:_id/',
    action: function () {
      this.render('project_details');
    },
    data: function () {
      return WorldBankProjects.findOne({id: this.params._id});
    }
  });

  this.route('dummy', {
    path: '/dummy/',
    action: function () {
      this.render('dummy');
    }
  });
});
