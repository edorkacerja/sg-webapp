/**
 * Created by AcerPC on 3/31/2016.
 */

export class ProfessorsController {
  constructor() {
    'ngInject';

    this.filtText = '';
    this.tab = 1;

    this.professorsArray = [
      {
        name: "edor",
        description: "edor has big balls cos dept",
        department: "cos"
      },
      {
        name: "teo",
        description: "bus department",
        department: "bus"
      },
      {
        name: "edor",
        description: "edor eco department has big balls",
        department: "eco"
      },
      {
        name: "teo",
        description: "teo e gay",
        department: "cos"
      },
      {
        name: "edor",
        description: "edor has big balls",
        department: "cos"
      },
      {
        name: "teo",
        description: "teo e gay",
        department: "cos"
      },
      {
        name: "edor",
        description: "edor has big balls",
        department: "cos"
      },
      {
        name: "teo",
        description: "teo e gay",
        department: "cos"
      },
      {
        name: "edor",
        description: "edor has big balls",
        department: "cos"
      },
      {
        name: "teo",
        description: "teo e gay",
        department: "cos"
      },
      {
        name: "edor",
        description: "edor has big balls",
        department: "mat"
      },
      {
        name: "teo",
        description: "teo e gay",
        department: "inf"
      }
    ];

  }





  select(setTab){
    this.tab = setTab;

    if (setTab === 2) {
      this.filtText = "cos";
    }
    else if (setTab === 3) {
      this.filtText = "eco";
    }
    else if (setTab === 4) {
      this.filtText = "mat";
    }
    else {
      this.filtText = "";
    }
  };

  isSelected(checkTab) {
    return (this.tab === checkTab);
  };













  getProfessors(){
    return this.professorsArray;
  }
}
