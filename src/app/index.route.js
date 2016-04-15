export function routerConfig($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'app/views_controllers/users/login.html',
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
        templateUrl: 'app/views_controllers/team/team.html',
        controller: 'TeamController',
        controllerAs: 'team'
      })
    .state('professors', {
      url: '/professors',
      templateUrl: 'app/views_controllers/professors/professors.html',
      controller: 'ProfessorsController',
      controllerAs: 'prof'
    })
    .state('professorDetails', {
      url: '/professors/:professorId',
      templateUrl: 'app/views_controllers/professors/professorDetails/professorDetails.html',
      controller: 'ProfessorDetailsController',
      controllerAs: 'profDetail'
    })
    .state('clubs', {
      url: '/clubs',
      templateUrl: 'app/views_controllers/clubs/clubs.html',
      controller: 'ClubsController',
      controllerAs: 'clubsCtrl'
    })
    .state('internships', {
      url: '/internships',
      templateUrl: 'app/views_controllers/internships/internships.html',
      controller: 'InternshipsController',
      controllerAs: 'internCtrl'
    })

  ;

  $urlRouterProvider.otherwise('/login');
}
