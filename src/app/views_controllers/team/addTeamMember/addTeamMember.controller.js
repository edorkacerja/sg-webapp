export class AddTeamMemberController {
  constructor(AddTeamMemberService , $rootScope, $modalInstance) {
    'ngInject';


    this.AddTeamMemberService = AddTeamMemberService;
    this.$rootScope = $rootScope;
    this.$modalInstance = $modalInstance;



  }


  register(user){

    this.$rootScope.$broadcast('memberAdded', user);

    this.$modalInstance.dismiss();


  }


  cancel(){
    this.$modalInstance.dismiss();
  }







}
