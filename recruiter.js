if (Meteor.isClient) {
  
}

if (Meteor.isServer) {
  Accounts.onLogin(function(){
      Router.go("/profile");
  });

  Meteor.startup(function () {
    // code to run on server at startup
  });
}

Router.map(function () {
  this.route('home', {
    path: '/', // match the root path
    template: 'home',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'header': {to: 'header'},
      'footer': {to: 'footer'}
    }
  });
  this.route('profile', {
    path: '/profile', // match the root path
    template: 'employee',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'header': {to: 'header'},
      'footer': {to: 'footer'}
    }
  });
  this.route('detail', {
    path: '/detail', // match the root path
    template: 'employeeDetail',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'header': {to: 'header'},
      'footer': {to: 'footer'}
    }
  });
  this.route('nominate', {
    path: '/nominate', // match the root path
    template: 'nominate',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'header': {to: 'header'},
      'footer': {to: 'footer'}
    }
  });
  this.route('team', {
    path: '/team', // match the root path
    template: 'teamInfo',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'header': {to: 'header'},
      'footer': {to: 'footer'}
    }
  });
  this.route('approval', {
    path: '/approve', // match the root path
    template: 'approval',
    layoutTemplate: 'layout',
    yieldTemplates: {
      'header': {to: 'header'},
      'footer': {to: 'footer'}
    }
  });
});
