export class AddTeamMemberController {
  constructor(AddTeamMemberService) {
    'ngInject';

    this.user = {};

    this.AddTeamMemberService = AddTeamMemberService;

  }


  register(){
    //feedbackFactory.submitReview().save({},$scope.feedback);

    console.log(this.AddTeamMemberService.submitNewMember());
    console.log(this.user);

  }










}
