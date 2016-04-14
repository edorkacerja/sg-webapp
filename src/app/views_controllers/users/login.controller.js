/**
 * Created by AcerPC on 3/31/2016.
 */
export class LoginController {
  constructor ($state, toastr, AuthService) {
    'ngInject';

    this.AuthService = AuthService;
    this.toastr = toastr;
    this.$state = $state;


    /** @ngInject */


  }



  login(user){

    var self = this;

    this.AuthService.login(user).then(
      function(result) {

        console.log(result);
        self.$state.go('home');
        self.toastr.success("Влязохте успешно!" );
      },
      function(error) {
        self.toastr.error("didnt work, but try again until your fingers bleed");
        //this.errorMessage = error.data.error_description;
      }

    );

    console.log(user);
  }



  register(regUser){

    //todo when api is ready
    //this.AuthService.register(regUser).then(
    //  function() {
    //    this.$state.go('login');
    //  },
    //  function(error){
    //    this.status = error;
    //  }
    //);
    console.log(regUser);
    this.change();
    this.toastr.success("Registration Successful, Log in now" );
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