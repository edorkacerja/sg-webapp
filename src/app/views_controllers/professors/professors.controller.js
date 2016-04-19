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


    this.filteredTodos = [];
    this.currentPage = 1;
    this.numPerPage = 10;
    this.maxSize = 5;


    this.professorsArray = [
      {
        name: "edor",
        id: "1",
        description: "edor has big balls cos dept",
        department: "cos"
      },
      {
        name: "teo",
        id: "2",
        description: "bus department",
        department: "bus"
      },
      {
        name: "edor",
        id: "3",
        description: "edor eco department has big balls",
        department: "eco"
      },
      {
        name: "teo",
        id: "4",
        description: "teo e gay",
        department: "cos"
      },
      {
        name: "edor",
        id: "5",
        description: "edor has big balls",
        department: "cos"
      },
      {
        name: "teo",
        id: "6",
        description: "teo e gay",
        department: "cos"
      },
      {
        name: "edor",
        id: "7",
        description: "edor has big balls",
        department: "cos"
      },
      {
        name: "teo",
        id: "8",
        description: "teo e gay",
        department: "cos"
      },
      {
        name: "9edor",
        id: "9",
        description: "edor has big balls",
        department: "cos"
      },
      {
        name: "10teo",
        id: "10",
        description: "teo e gay",
        department: "cos"
      },
      {
        name: "edor",
        id: "11",
        description: "edor has big balls",
        department: "mat"
      },
      {
        name: "teo",
        id: "12",
        description: "teo e gay",
        department: "inf"
      }
    ];

    this.$scope.$watch('currentPage', this.pageChanged());


  }



  pageChanged() {
    var begin = ((this.currentPage - 1) * this.numPerPage), end = begin + this.numPerPage;
    this.filteredTodos = this.professorsArray.slice(begin, end);
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
