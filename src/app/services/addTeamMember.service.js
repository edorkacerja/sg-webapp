export class AddTeamMemberService {
  constructor($resource, api) {
    'ngInject';
    this.note = "note";
    this.$resource = $resource;
    this.api = api;


  }


  submitNewMember() {




    $resource(api +"/buildings/:id", { id: '@id'}, {
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
      },
      getBalance: {
        method: 'GET',
        url: api +"/buildings/:id/balance"
      }
    });

    return this.note;

  }


}
