const SERVICE = new WeakMap();

export class TeamController {

  constructor($modal, $scope, $window, TeamMemberService) {
    'ngInject';

    SERVICE.set(this, TeamMemberService.resource);
    //this.$modalInstance = $modalInstance;
    this.$scope = $scope;
    this.$window = $window;
    this.filteredTodos = [];
    this.currentPage = 1;
    this.numPerPage = 10;
    this.maxSize = 5;





    this.$scope.$on('memberAdded', this.memberAdded());
    this.$modal = $modal;
    this.teamMembersArray = [
      {
        name: "teo",
        description: "14teo e backend dev"
      },
      {
        name: "teo",
        description: "15teo e meteor dev"
      }
    ];

    this.getTeamMembers();
    this.$scope.$watch('currentPage', this.pageChanged());

  }






  pageChanged() {
      var begin = ((this.currentPage - 1) * this.numPerPage), end = begin + this.numPerPage;
      this.filteredTodos = this.teamMembersArray.slice(begin, end);
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
      this.teamMembersArray.push(data);
    };

  }

  deleteTeamMember(memberId){
    if(this.$window.confirm('You sure you want to delete this member?')) {
      SERVICE.get(this).delete({memberId: memberId}).$promise.then((success) => {},
        (error) => { console.log(error.statusText); });

    }
  }




  getTeamMembers(){
    SERVICE.get(this).query().$promise.then( response => {
      this.teamMembersArray = response;
      console.log(response.$promise);

    }, error => {
      console.log(error);
    });
  }



  toggleSideNavbar(){
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }




}
