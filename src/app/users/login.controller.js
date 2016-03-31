/**
 * Created by AcerPC on 3/31/2016.
 */
export class LoginController {
  constructor ($scope, $timeout, $state, webDevTec, toastr) {
    'ngInject';
    this.toastr = toastr;
    this.$state = $state;

    /** @ngInject */


  }

  login(){
    //console.log(user);
    this.$state.go('home');
    this.showToastr()
  }

  change(){
      $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
    };


  showToastr() {
    this.toastr.success('Login Successful');
    this.classAnimation = '';
  }

    //  //vm.login = function(user) {
    //  //  auth.login(user).then(
    //  //    function() {
    //  //      $state.go('buildings');
    //  //      toastr.success("Влязохте успешно!" );
    //  //    },
    //  //    function(error) {
    //  //      toastr.error("Неуспешно влизане в системата" , error );
    //  //      vm.errorMessage = error.data.error_description;
    //  //    }
    //  //  );
    //  //
    //  //}
    //
    //  //Handling the error message of form validation
    //
    //  //$('.message a').click(function () {
    //  //  $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
    //  //});



  }
