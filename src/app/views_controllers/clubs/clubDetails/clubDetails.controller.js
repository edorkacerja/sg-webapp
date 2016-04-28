const SERVICE = new WeakMap();


export class ClubDetailsController {

  constructor($modal, $scope, $stateParams, ClubsService) {
    'ngInject';
    this.$scope = $scope;
    this.$stateParams = $stateParams;
    this.$modal = $modal;
    SERVICE.set(this, ClubsService.resource);
    this.getClub($stateParams.clubId);
  }


  getClub(clubId) {
    SERVICE.get(this).get({clubId: clubId}).$promise.then((response)=> {
      this.club = response;
    }, (error)=> {
      console.log(error);
    });
  }

  deleteClub(clubId) {
    SERVICE.get(this).delete({clubId: clubId}).$promise.then((success)=> {
      console.log('club deleted');
    }, (error)=> {
      console.log(error);
    });
  }
}
