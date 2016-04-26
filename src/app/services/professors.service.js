const HTTP = new WeakMap();


export class ProfessorsService {
  constructor($resource, api, $http) {
    'ngInject';
    this.note = "note";
    this.$resource = $resource;
    this.api = api;
    HTTP.set(this, $http);
  }

  submitNewMember() {

    //this.$resource(this.api + "v1/professors", null, {
    //  get: {
    //    method: 'GET'
    //  },
    //  query: {
    //    method: 'GET'
    //  },
    //  delete: {
    //    method: 'DELETE'
    //  },
    //  save: {
    //    method: 'POST'
    //  },
    //  update: {
    //    method: 'PUT'
    //  }
    //});


    return HTTP.get(this).get('http://sgaubg.herokuapp.com/api/v1/professors').then(response => response.data);


  }


}
