const Q = new WeakMap();
const WINDOW = new WeakMap();
let self;

export class AuthInterceptor {

  constructor($q, $window) {

    'ngInject';
    self = this;
    this.$q = $q;
    this.$window = $window;

    Q.set(this, $q);
    WINDOW.set(this, $window);

  }


  request(config) {
    config.headers = config.headers || {};
    if (self.$window.sessionStorage["userInfo"] == "null" || self.$window.sessionStorage["userInfo"] == undefined) {
    } else {
      config.headers.Authorization = JSON.parse(self.$window.sessionStorage["userInfo"]).accessToken;
    }


    return config;
  }


  response(response) {
    return response || this.$q.when(response);
  }


  responseError(rejection) {
    return this.$q.reject(rejection);

  }

  //static httpAuthFactory($q, $injector) {
  //  return new AuthInterceptor($q, $injector);
  //}


}
