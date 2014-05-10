/* Routes */

Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function () {
  this.route('index', {
    path: '/',
      action: function () {
        this.render('index');
      }
  });

  this.route('dummy', {
    path: '/dummy/',
    action: function () {
      this.render('dummy');
    }
  });
});
