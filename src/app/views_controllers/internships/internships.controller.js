const SERVICE = new WeakMap();

export class InternshipsController {

  constructor($window, $modal, InternshipsService) {
    'ngInject';
    this.$modal = $modal;

    SERVICE.set(this, InternshipsService.resource);
    this.$window = $window;
    this.getInternships();
    this.internshipsArray = [
      {
        name: "Internship 1",
        id: "1",
        description: "best internship on earth",
        link: "www.pornhub.com"
      },
      {
        name: "Internship 1",
        id: "2",
        description: "best internship on earth",
        link: "www.pornhub.com"
      },
      {
        name: "Internship 1",
        id: "3",
        description: "best internship on earth",
        link: "www.pornhub.com"
      },
      {
        name: "Internship 1",
        id: "4",
        description: "best internship on earth",
        link: "www.pornhub.com"
      },
      {
        name: "Internship 1",
        id: "5",
        description: "best internship on earth",
        link: "www.pornhub.com"
      },
      {
        name: "Internship 1",
        id: "6",
        description: "best internship on earth",
        link: "www.pornhub.com"
      }
    ];


  }

  addInternship() {
    this.$modal.open({
      animation: true,
      templateUrl: 'app/views_controllers/internships/addInternship/addInternship.html',
      controller: 'AddInternshipController',
      controllerAs: 'aic',
      size: 'md'
    });
  }


  getInternships() {
    SERVICE.get(this).query().$promise.then(response => {
        this.internshipsArray = response;
      },
      error => {
        console.log(error);
      });
  }

  deleteInternship(internshipId) {
    if (this.$window.confirm('You sure you want to delete this member?')) {
      SERVICE.get(this).delete({internshipId: internshipId}).$promise.then(() => {
        },
        (error) => {
          console.log(error.statusText);
        });
    }
  }

}
