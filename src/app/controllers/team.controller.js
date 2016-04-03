/**
 * Created by AcerPC on 3/31/2016.
 */

export class TeamController {
  constructor() {
    'ngInject';

    this.teamMembers = [
      {name:"edor",
        description: "edor has big balls"},
      {name:"teo",
        description: "teo e gay"},
      {name:"edor",
        description: "edor has big balls"},
      {name:"teo",
        description: "teo e gay"},
      {name:"edor",
        description: "edor has big balls"},
      {name:"teo",
        description: "teo e gay"}
    ];



  }



  getTeam(){


    return this.teamMembers;
  }
}
