/**
 * Created by AcerPC on 3/31/2016.
 */

export class InternshipsController {

  constructor($modal) {
    'ngInject';
    this.$modal = $modal;

    //this.$modalInstance = $modalInstance;

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

  addInternship(){
    this.$modal.open({
      animation: true,
      templateUrl: 'app/views_controllers/internships/addInternship/addInternship.html',
      controller: 'AddInternshipController',
      controllerAs: 'aic',
      size: 'md'
    });
  }




}
