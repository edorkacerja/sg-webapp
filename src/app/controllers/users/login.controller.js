/**
 * Created by AcerPC on 3/31/2016.
 */
(function() {
  'use strict';

  angular
    .module('sg')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController( auth, $state, toastr) {
    var vm = this;


    vm.change = function() {
      $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
    };

    //vm.login = function(user) {
    //  auth.login(user).then(
    //    function() {
    //      $state.go('buildings');
    //      toastr.success("Влязохте успешно!" );
    //    },
    //    function(error) {
    //      toastr.error("Неуспешно влизане в системата" , error );
    //      vm.errorMessage = error.data.error_description;
    //    }
    //  );
    //
    //}

    //Handling the error message of form validation




  }


})();
