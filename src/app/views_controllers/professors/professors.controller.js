/**
 * Created by AcerPC on 3/31/2016.
 */
const SERVICE = new WeakMap();
var edor = {};


export class ProfessorsController {

  constructor($modal, $scope, ProfessorsService) {
    'ngInject';
    SERVICE.set(edor, ProfessorsService.resource);

    this.$scope = $scope;
    this.$modal = $modal;


    this.$scope.$on('NewProfessorAdded', this.professorAdded());
    this.filtText = '';
    this.tab = 1;


    this.getProfessors();

    this.filteredTodos = [];
    this.currentPage = 1;
    this.numPerPage = 10;
    this.maxSize = 5;


    //this.$scope.$watch('currentPage', this.pageChanged());
  }


  //
  //pageChanged() {
  //  var begin = ((this.currentPage - 1) * this.numPerPage), end = begin + this.numPerPage;
  //  this.filteredTodos = this.professorsArray.slice(begin, end);
  //}



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
      SERVICE.get(edor).addNewProfessor(data);
    };
  }


  getProfessors(){

    SERVICE.get(edor).query().$promise.then( result => {
      this.professorsArray = result;
      console.log(this);
    });
  }



  deleteProfessor(professor){
    var index = this.professorsArray.indexOf(professor);
    this.professorsArray.splice(index, 1);
  }
}
