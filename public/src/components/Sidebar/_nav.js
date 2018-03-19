export default {
  items: [{
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    },
    {
      name: 'Session',
      url: '/session',
      icon: 'icon-microphone'
    },
    
    {
      name: 'Rooms',
      url: '/rooms',
      icon: 'icon-home'
    },
    {
      name: 'Reports',
      url: '/reports',
      icon: 'icon-pie-chart',
    },
    {
      name: 'Attendance',
      url: '/attendance',
      icon: 'icon-note'
    },
    // {
    //   name: 'RenderForm',
    //   url: '/renderForm',
    //   icon: 'icon-note'
    // },
    // {
    //   name: 'Questions',
    //   url: '/questions',
    //   icon: 'icon-question'
    // },
    {
      name: 'Registration',
      url: '/registration',     
      icon: 'icon-note'
    },
    {
      name: 'Registration List',
      url: '/registrationList',
      icon: 'icon-note'
    },
    {
      title: true,
      name: 'Users',
      wrapper: {
        element: '',
        attributes: {}
      },
    },
    {
      name: 'User',
      url: '/user',
      icon: 'icon-user',
    },
    {
      name: 'Role',
      url: '/role',
      icon: 'icon-trophy',
    },
    {
      name: 'Logout',
      url: '/login',
      icon: 'icon-lock'
    },
  ]
};