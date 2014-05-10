/* Route configuration */

mainYieldTemplates = {
  header: {to: 'header'},
  footer: {to: 'footer'}
};

Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'notFound',
  yieldTemplates: mainYieldTemplates
});

