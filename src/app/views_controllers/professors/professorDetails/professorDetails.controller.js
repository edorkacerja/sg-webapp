const SERVICE = new WeakMap();

export class ProfessorDetailsController {

  constructor($modal, $scope, $stateParams, ProfessorsService) {
    'ngInject';
    this.$scope = $scope;
    this.$stateParams = $stateParams;
    this.$modal = $modal;
    SERVICE.set(this, ProfessorsService);


    var profId = $stateParams.professorId;
    console.log(profId);
    console.log("----------------");
    this.getProfessor();
    console.log(this.$stateParams);
  }



  getProfessor(){
    SERVICE.get(this).getProfessor(this.$stateParams.professorId).then( result => {
      this.professorDetails= result;
    });
  }



}
