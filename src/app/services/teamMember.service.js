export class TeamMemberService {
  constructor($resource, api) {
    'ngInject';
    this.note = "note";
    this.resource = $resource(api +"v1/team_members/:teamMemberId", { teamMemberId: '@teamMemberId'}, {
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
      add: {
        method: 'POST'
      },
      update: {
        method: 'PUT'
      }
    });


  }



}
