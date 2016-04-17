/**
 * Created by AcerPC on 3/31/2016.
 */

export class TeamController {

  constructor($modal, $scope) {
    'ngInject';


    //this.$modalInstance = $modalInstance;
    this.$scope = $scope;
    this.$scope.$on('memberAdded', this.memberAdded());
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




  addMember() {

    this.$modal.open({
      animation: true,
      templateUrl: 'app/views_controllers/team/addTeamMember/addTeamMember.html',
      controller: 'AddTeamMemberController',
      controllerAs: 'atm',
      size: 'md'
    });

  }


  memberAdded(){
    return (event, data) => {
      console.log(data);
      this.teamMembers.push(data);
    };

  }

  deleteTeamMember(member){
      var index = this.teamMembers.indexOf(member);
      this.teamMembers.splice(index, 1);
  }

  toggleSideNavbar(){
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }


}
