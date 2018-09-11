
const routerConfig = {
  '/app': {
    component: require('../layouts/Private').default,
    key: 'private',
    routes: [
      {
        path: '/app/employees/personal-info',
        exact: true,
        component: require('../routes/EmployeesUnit/PersonalInfo').default,
        key: 'PersonalInfo',
      },
    ],
  },
  '/': {
    component: require('../layouts/Public').default,
    // exact: true,
    key: 'public',
    routes: [
      {
        path: '/auth/login',
        exact: true,
        component: require('../routes/Login/Login').default,
        key: 'login',
      },
    ]
  }
};

export function getRouterData() {
  return routerConfig
}
