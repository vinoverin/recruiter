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
    },
    data: {
      pageName: 'Profile'
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

  this.route('dashboard', {
    path: '/dashboard', // match the root path
    template: 'dashboard',
    layoutTemplate: 'twoColumnLayout',
    yieldTemplates: {
      'header': {to: 'header'},
      'footer': {to: 'footer'},
      'dashboardNav': {to: 'aside'}
    }
  });
  this.route('interviewStatus', {
    path: '/interviewer-status', // match the root path
    template: 'interviewerStatus',
    layoutTemplate: 'twoColumnLayout',
    yieldTemplates: {
      'header': {to: 'header'},
      'footer': {to: 'footer'},
      'dashboardNav': {to: 'aside'}
    }
  });
  this.route('search', {
    path: '/search', // match the root path
    template: 'search',
    layoutTemplate: 'twoColumnLayout',
    yieldTemplates: {
      'header': {to: 'header'},
      'footer': {to: 'footer'},
      'dashboardNav': {to: 'aside'}
    }
  });

  this.route('reports', {
    path: '/reports', // match the root path
    template: 'reports',
    layoutTemplate: 'twoColumnLayout',
    yieldTemplates: {
      'header': {to: 'header'},
      'footer': {to: 'footer'},
      'dashboardNav': {to: 'aside'}
    }
  });

    this.route('pendingApprovals', {
      path: '/pending-approvals', // match the root path
      template: 'pendingApprovals',
      layoutTemplate: 'twoColumnLayout',
      yieldTemplates: {
        'header': {to: 'header'},
        'footer': {to: 'footer'},
        'dashboardNav': {to: 'aside'}
      }
    });
    this.route('guidelines', {
      path: '/guidelines', // match the root path
      template: 'guidelines',
      layoutTemplate: 'layout',
      yieldTemplates: {
        'header': {to: 'header'},
        'footer': {to: 'footer'}
      }
    });
});
