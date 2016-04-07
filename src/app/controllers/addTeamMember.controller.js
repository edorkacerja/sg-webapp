export class AddTeamMemberController {
  constructor(AddTeamMemberService , $rootScope) {
    'ngInject';


    this.AddTeamMemberService = AddTeamMemberService;
    this.$rootScope = $rootScope;



  }


  register(user){

    this.$rootScope.$broadcast('memberAdded', user);




  }










}
