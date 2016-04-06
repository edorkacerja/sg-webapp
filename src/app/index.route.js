export function routerConfig($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'app/views/users/login.html',
      controller: 'LoginController',
      controllerAs: 'login'
    })
    .state('home', {
      url: '/home',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('team', {
        url: '/team',
        templateUrl: 'app/views/team.html',
        controller: 'TeamController',
        controllerAs: 'team'
      })
    .state('professors', {
        url: '/professors',
        templateUrl: 'app/views/professors.html',
        controller: 'ProfessorsController',
        controllerAs: 'prof'
      })

  ;

  $urlRouterProvider.otherwise('/login');
}
