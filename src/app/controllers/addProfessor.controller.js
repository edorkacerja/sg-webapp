export class AddProfessorController {
  constructor(AddTeamMemberService, $rootScope, $modalInstance) {
    'ngInject';

    this.$modalInstance = $modalInstance;
    this.AddTeamMemberService = AddTeamMemberService;
    this.$rootScope = $rootScope;

  }


  addNewProfessor(newProfessor) {

    this.$rootScope.$broadcast('memberAdded', newProfessor);

  }


  closeRegistrationForm(){
    console.log("close modal vella");
    this.$modalInstance.dismiss();
  }

}


