/**
 * Created by AcerPC on 3/31/2016.
 */

export class TeamController {
  constructor($modal) {
    'ngInject';
    this.$modal = $modal;
    this.teamMembers = [
      {
        name: "edor",
        description: "edor has big balls"
      },
      {
        name: "teo",
        description: "teo e gay"
      },
      {
        name: "edor",
        description: "edor has big balls"
      },
      {
        name: "teo",
        description: "teo e gay"
      },
      {
        name: "edor",
        description: "edor has big balls"
      },
      {
        name: "teo",
        description: "teo e gay"
      },
      {
        name: "edor",
        description: "edor has big balls"
      },
      {
        name: "teo",
        description: "teo e gay"
      },
      {
        name: "edor",
        description: "edor has big balls"
      },
      {
        name: "teo",
        description: "teo e gay"
      },
      {
        name: "edor",
        description: "edor has big balls"
      },
      {
        name: "teo",
        description: "teo e gay"
      }
    ];


  }


  getTeam() {


    return this.teamMembers;
  }


  //addMember(){
  //
  //  this.ModalService.showModal({
  //    templateUrl: 'app/views/addTeamMember.html',
  //    controller: 'AddTeamMemberController',
  //    controllerAs: 'atm'
  //  });
  //}

  addMember() {
    var modalInstance = this.$modal.open({
      animation: true,
      templateUrl: 'app/views/addTeamMember.html',
      controller: 'AddTeamMemberController',
      size: 'sm'

    });
  }

}
