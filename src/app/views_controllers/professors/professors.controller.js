/**
 * Created by AcerPC on 3/31/2016.
 */

export class ProfessorsController {

  constructor($modal, $scope) {
    'ngInject';
    this.$scope = $scope;
    this.$modal = $modal;
    //this.$modalInstance = $modalInstance;
    this.$scope.$on('NewProfessorAdded', this.professorAdded());
    this.filtText = '';
    this.tab = 1;

    this.professorsArray = [
      {
        name: "edor",
        description: "edor has big balls cos dept",
        department: "cos"
      },
      {
        name: "teo",
        description: "bus department",
        department: "bus"
      },
      {
        name: "edor",
        description: "edor eco department has big balls",
        department: "eco"
      },
      {
        name: "teo",
        description: "teo e gay",
        department: "cos"
      },
      {
        name: "edor",
        description: "edor has big balls",
        department: "cos"
      },
      {
        name: "teo",
        description: "teo e gay",
        department: "cos"
      },
      {
        name: "edor",
        description: "edor has big balls",
        department: "cos"
      },
      {
        name: "teo",
        description: "teo e gay",
        department: "cos"
      },
      {
        name: "edor",
        description: "edor has big balls",
        department: "cos"
      },
      {
        name: "teo",
        description: "teo e gay",
        department: "cos"
      },
      {
        name: "edor",
        description: "edor has big balls",
        department: "mat"
      },
      {
        name: "teo",
        description: "teo e gay",
        department: "inf"
      }
    ];

  }





  select(setTab){
    this.tab = setTab;

    if (setTab === 2) {
      this.filtText = "cos";
    }
    else if (setTab === 3) {
      this.filtText = "eco";
    }
    else if (setTab === 4) {
      this.filtText = "mat";
    }
    else {
      this.filtText = "";
    }
  };

  isSelected(checkTab) {
    return (this.tab === checkTab);
  };




  addProfessor() {
    this.$modal.open({
      animation: true,
      templateUrl: 'app/views_controllers/professors/addProfessor/addProfessor.html',
      controller: 'AddProfessorController',
      controllerAs: 'apr',
      size: 'md'
    });

  }

  professorAdded(){
    return (event, data) => {
      console.log(data);
      this.professorsArray.push(data);
    };
  }

  getProfessors(){
    return this.professorsArray;
  }

  deleteProfessor(professor){
    var index = this.professorsArray.indexOf(professor);
    this.professorsArray.splice(index, 1);
  }
}
