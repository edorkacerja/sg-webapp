export class ProfessorsService {
  constructor($resource, api) {

    'ngInject';
    this.note = "note";
    this.$resource = $resource;
    this.api = api;


  }


  submitNewMember() {

    $resource(this.api +"/professors", null, {
      get: {
        method: 'GET'
      },
      query: {
        method: 'GET'
      },
      delete: {
        method: 'DELETE'
      },
      save: {
        method: 'POST'
      },
      update: {
        method: 'PUT'
      }
    });

    return this.note;

  }


}
