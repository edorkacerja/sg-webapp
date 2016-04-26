export function NavbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/navbar/navbar.html',
    scope: {
      creationDate: '='
    },
    controller: NavbarController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class NavbarController {
  constructor(moment, $window) {
    'ngInject';

    this.$window = $window;
    // "this.creation" is available by directive option "bindToController: true"
    this.relativeDate = moment(this.creationDate).fromNow();
  }

  logout() {
  console.log('logged out');
    //this.$window.sessionStorage["userInfo"] = null;
  }


}
