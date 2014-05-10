/* Routes */

Router.map(function () {
  this.route('index', {
    path: '/',
    action: function () {
      this.render('index');
    }
  });

  this.route('project', {
    path: '/project',
    action: function () {
      this.render('project');
    }
  });

  this.route('dummy', {
    path: '/dummy/',
    action: function () {
      this.render('dummy');
    }
  });
});
