
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
      {
        path: '/app/employees/members',
        exact: true,
        component: require('../routes/EmployeesUnit/Members').default,
        key: 'Members',
      },
      {
        path: '/app/employees/nadb',
        exact: true,
        component: require('../routes/EmployeesUnit/Nadb').default,
        key: 'Nadb',
      },
      {
        path: '/app/employees/movement',
        exact: true,
        component: require('../routes/EmployeesUnit/Movement').default,
        key: 'Movement',
      },
      {
        path: '/app/employees/punishment',
        exact: true,
        component: require('../routes/EmployeesUnit/Punishment').default,
        key: 'Punishment',
      },
      {
        path: '/app/employees/achievment',
        exact: true,
        component: require('../routes/EmployeesUnit/Achievment').default,
        key: 'Achievment',
      },
      {
        path: '/app/employees/loaning',
        exact: true,
        component: require('../routes/EmployeesUnit/Loaning').default,
        key: 'Loaning',
      },
      {
        path: '/app/employees/work-management/:id',
        exact: true,
        component: require('../routes/Mamangment/ProjectDetail').default,
        key: 'WorkManagmentDetails',
      },
      {
        path: '/app/employees/work-management',
        exact: true,
        component: require('../routes/Mamangment/WorkManagment').default,
        key: 'WorkManagment',
      },
      {
        path: '/app/employees/reports',
        exact: true,
        component: require('../routes/Mamangment/Reports').default,
        key: 'Reports',
      },
      {
        path: '/app/employees/management',
        exact: true,
        component: require('../routes/Mamangment/Mamagement').default,
        key: 'Mamagement',
      },
      {
        path: '/app/employees/vb',
        exact: true,
        component: require('../routes/VB/ٍSubjects').default,
        key: 'ٍSubjects',
      },
    {
        path: '/app/employees/vb/add',
        exact: true,
        component: require('../routes/VB/AddSubject').default,
        key: 'AddSubject',
      },
      {
        path: '/app/vacations/rules',
        exact: true,
        component: require('../routes/VacationsUnit/Rules').default,
        key: 'VacationRules',
      },
      {
        path: '/app/vacations/add',
        exact: true,
        component: require('../routes/VacationsUnit/AddVacation').default,
        key: 'AddVacation',
      },
      {
        path: '/app/employees/vb/subject/1',
        exact: true,
        component: require('../routes/VB/Subject').default,
        key: 'Subject',
      }
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
