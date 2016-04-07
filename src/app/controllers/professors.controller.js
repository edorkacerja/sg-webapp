/**
 * Created by AcerPC on 3/31/2016.
 */

export class ProfessorsController {
  constructor() {
    'ngInject';

    this.tab = 1;

    this.professorsArray = [
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







  select(setTab) {
    this.tab = setTab;

    if (setTab === 2) {
      $scope.filtText = "appetizer";
    }
    else if (setTab === 3) {
      $scope.filtText = "mains";
    }
    else if (setTab === 4) {
      $scope.filtText = "dessert";
    }
    else {
      $scope.filtText = "";
    }
  };

  isSelected(checkTab) {
    return ($scope.tab === checkTab);
  };

  //$scope.toggleDetails = function() {
  //  $scope.showDetails = !$scope.showDetails;
  //};





  getProfessors(){
    return this.professorsArray;
  }
}
