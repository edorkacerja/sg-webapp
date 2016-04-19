/**
 * Created by AcerPC on 3/31/2016.
 */

export class ClubDetailsController {

  constructor($modal, $scope, $stateParams) {
    'ngInject';
    this.$scope = $scope;
    //this.ClubDetailService = ClubDetailService; todo inject this service
    this.$stateParams = $stateParams;
    this.$modal = $modal;
    //this.$modalInstance = $modalInstance;

    //todo: implement this when api and service is ready
    //this.clubDetails = ClubDetailService.getProfessors().query({professorId: parseInt($stateParams.professorId, 10)})
    //.$promise.then(
    //    function(response){
    //      this.professorProfile = response;
    //    },
    //    function(error){
    //      console.log(error);
    //    }
    //  )

    console.log(this.$stateParams);
  }





}
