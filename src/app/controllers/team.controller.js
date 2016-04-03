/**
 * Created by AcerPC on 3/31/2016.
 */

export class TeamController {
  constructor(ModalService) {
    'ngInject';
    this.ModalService = ModalService;
    this.teamMembers = [
      {name:"edor",
        description: "edor has big balls"},
      {name:"teo",
        description: "teo e gay"},
      {name:"edor",
        description: "edor has big balls"},
      {name:"teo",
        description: "teo e gay"},
      {name:"edor",
        description: "edor has big balls"},
      {name:"teo",
        description: "teo e gay"},
      {name:"edor",
        description: "edor has big balls"},
      {name:"teo",
        description: "teo e gay"},
      {name:"edor",
        description: "edor has big balls"},
      {name:"teo",
        description: "teo e gay"},
      {name:"edor",
        description: "edor has big balls"},
      {name:"teo",
        description: "teo e gay"}
    ];



  }



  getTeam(){


    return this.teamMembers;
  }



  addMember(){
    console.log('addmemberclicked');

    this.ModalService.showModal({
      templateUrl: 'app/views/addTeamMember.html',
      controller: 'AddTeamMemberController',
      controllerAs: 'atm'
    }).then(function(modal) {

      //it's a bootstrap element, use 'modal' to show it
      //modal.element.modal();
      modal.close.then(function(result) {
        console.log(result);
      });
    });
  }
}
