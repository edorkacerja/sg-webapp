
export class ProfessorsService {
  constructor($resource, api, $http) {
    'ngInject';
    this.resource = $resource(api + 'v1/professors', null, {
      get: {
        method: 'GET'
      },
      query: {
        method: 'GET',
        isArray: true
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


  }







}
