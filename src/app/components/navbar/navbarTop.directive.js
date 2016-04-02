export function NavbarTopDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/navbar/navbarTop.html',
    scope: {
      creationDate: '='
    },
    controller: NavbarTopController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class NavbarTopController {
  constructor (moment) {
    'ngInject';

    // "this.creation" is available by directive option "bindToController: true"
    this.relativeDate = moment(this.creationDate).fromNow();
  }
}
