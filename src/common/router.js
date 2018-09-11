
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
      {
        path: '/app/employees/qualifications',
        exact: true,
        component: require('../routes/EmployeesUnit/Qualifications').default,
        key: 'qualifications',
      },
      {
        path: '/app/employees/employment-info',
        exact: true,
        component: require('../routes/EmployeesUnit/EmploymentInfo').default,
        key: 'EmploymentInfo',
      },
      {
        path: '/app/employees/experiences',
        exact: true,
        component: require('../routes/EmployeesUnit/Experiences').default,
        key: 'Experiences',
      },
      {
        path: '/app/employees/fin',
        exact: true,
        component: require('../routes/EmployeesUnit/Financial').default,
        key: 'Financial',
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
