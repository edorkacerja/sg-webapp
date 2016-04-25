/**
 * Created by AcerPC on 3/31/2016.
 */
export class TeamController {

  constructor($modal, $scope) {
    'ngInject';


    //this.$modalInstance = $modalInstance;
    this.$scope = $scope;

    this.filteredTodos = [];
    this.currentPage = 1;
    this.numPerPage = 10;
    this.maxSize = 5;





    this.$scope.$on('memberAdded', this.memberAdded());
    this.$modal = $modal;
    this.teamMembers = [
      {
        name: "edor",
        description: "1edor has big balls"
      },
      {
        name: "teo",
        description: "2teo e gay"
      },
      {
        name: "edor",
        description: "3edor has big balls"
      },
      {
        name: "teo",
        description: "4teo e gay"
      },
      {
        name: "edor",
        description: "5edor has big balls"
      },
      {
        name: "teo",
        description: "6teo e gay"
      },
      {
        name: "edor",
        description: "7edor has big balls"
      },
      {
        name: "teo",
        description: "8teo e gay"
      },
      {
        name: "edor",
        description: "9edor has big balls"
      },
      {
        name: "teo",
        description: "10teo e gay"
      },
      {
        name: "edor",
        description: "11edor has big balls"
      },
      {
        name: "teo",
        description: "12teo e gay"
      },
      {
        name: "teo",
        description: "13teo e gay"
      },
      {
        name: "teo",
        description: "14teo e gay"
      },
      {
        name: "teo",
        description: "15teo e gay"
      }
    ];


    this.$scope.$watch('currentPage', this.pageChanged());

  }

  pageChanged() {
      var begin = ((this.currentPage - 1) * this.numPerPage), end = begin + this.numPerPage;
      this.filteredTodos = this.teamMembers.slice(begin, end);
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


  //pagination




}
