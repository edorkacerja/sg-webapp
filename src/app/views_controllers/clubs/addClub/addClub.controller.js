export class AddClubController {
  constructor( $rootScope, $modalInstance) {
    'ngInject';


    this.$rootScope = $rootScope;
    this.$modalInstance = $modalInstance;



  }


  register(user){

    this.$rootScope.$broadcast('memberAdded', user);

    this.$modalInstance.dismiss();


  }


  cancel(){
    this.$modalInstance.dismiss();
  }







}
