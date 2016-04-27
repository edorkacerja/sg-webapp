const SERVICE = new WeakMap();

export class ProfessorDetailsController {

  constructor($modal, $scope, $stateParams, ProfessorsService) {
    'ngInject';
    this.$scope = $scope;
    this.$stateParams = $stateParams;
    this.$modal = $modal;
    SERVICE.set(this, ProfessorsService.resource);



    this.getProfessor(this.$stateParams.professorId);
  }


  getProfessor(professorId) {
    SERVICE.get(this).get({professorId: professorId}).$promise.then(result => {
      this.professorDetails = result;
      console.log(result);
    });
  }


  saveProfessorEditing(professorId) {
    console.log('editing');
    SERVICE.get(this).update({professorId: professorId}).$promise.then(() => {});
  }

  deleteProfessor(professorId){

    this.$modal.open({
      animation: true,
      template: "<p> edor</p>",
      controller: 'AddProfessorController',
      controllerAs: 'apr',
      size: 'md'
    });

    SERVICE.get(this).delete({professorId: professorId});
  }


}
