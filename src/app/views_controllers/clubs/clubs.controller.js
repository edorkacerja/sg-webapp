/**
 * Created by AcerPC on 3/31/2016.
 */

export class ClubsController {

  constructor($modal) {
    'ngInject';
    this.$modal = $modal;


    //this.$modalInstance = $modalInstance;

    this.clubsArray = [
      {
        name: "spaces",
        id: "1",
        professorId: "who knows, who cares",
        president: "mitko the tiger",
        department: "cos"
      },
      {
        name: "spaces",
        id: "2",
        professorId: "who knows, who cares",
        president: "mitko the tiger",
        department: "cos"
      },
      {
        name: "spaces",
        id: "3",
        professorId: "who knows, who cares",
        president: "mitko the tiger",
        department: "cos"
      },
      {
        name: "spaces",
        id: "4",
        professorId: "who knows, who cares",
        president: "mitko the tiger",
        department: "cos"
      },
      {
        name: "spaces",
        id: "5",
        professorId: "who knows, who cares",
        president: "mitko the tiger",
        department: "cos"
      },
      {
        name: "spaces",
        id: "6",
        professorId: "who knows, who cares",
        president: "mitko the tiger",
        department: "cos"
      },
      {
        name: "spaces",
        id: "7",
        professorId: "who knows, who cares",
        president: "mitko the tiger",
        department: "cos"
      },
      {
        name: "spaces",
        id: "8",
        professorId: "who knows, who cares",
        president: "mitko the tiger",
        department: "cos"
      }
    ];
  }


  addClub() {

    this.$modal.open({
      animation: true,
      templateUrl: 'app/views_controllers/clubs/addClub/addClub.html',
      controller: 'AddClubController',
      controllerAs: 'acc',
      size: 'md'
    });

  }



}
