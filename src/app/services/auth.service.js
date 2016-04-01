export class AuthService {
  constructor($http, $window ,  $q , api , $rootScope) {
    'ngInject';

    this.$window = $window;
    this.$http = $http;
    this.api = api;
    this.$q = $q;
    this.$rootScope = $rootScope;
  }

  //LOG IN
  login(user) {
  var deferred = this.$q.defer();
  this.$http.post(this.api+"/token", "grant_type=password&username=" + user.email +
    "&password=" + user.password,

    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded' // Note the appropriate header
      }
    }
  ).then(
    function(response) {

      if(response.status == 200) {

        var userInfo = {//generate an access token on the server for the user
          accessToken: response.data.access_token,
          userName: response.data.userName,
          userRoles: response.data.userRoles.split(',')
        };
        this.$rootScope.$emit('user:loggedin', userInfo); //broadcast to all controllers that  the user has logged in
        this.$window.sessionStorage["userInfo"] = JSON.stringify(userInfo);//store the data on the client
        deferred.resolve();
      } else {
        deferred.reject(response);
      }
    },
    function(error) {
      deferred.reject(error);
    });

  return deferred.promise;
};

//LOG OUT
  logout() {
  var deferred = this.$q.defer();
  this.$http({
    url: this.api + '/account/logout' ,
    method: 'POST',
    headers:  {'Authorization': 'Bearer '+  JSON.parse($window.sessionStorage["userInfo"]).accessToken }

  }).then( function(){
    this.$window.sessionStorage["userInfo"]  = null;
    this.$rootScope.$emit('user:loggedout'); //broadcast to all controllers that  the user has logged out
    deferred.resolve();
  }, function(error) {
    deferred.reject();
  });
  return deferred.promise;
};


//REGISTER
  register(user) { //todo modify when api is ready
  var deferred = this.$q.defer();
  this.$http.post( this.api +"/account/register", {"First_Name": user.first_name, "Last_Name": user.last_name, "Email": user.email , "Password": user.password , "ConfirmPassword": user.confirmPassword })
    .then(
      function() {
        deferred.resolve();
      },
      function(error){
        deferred.reject(error.data.ModelState[0]);
      });

  return deferred.promise;
};



}
