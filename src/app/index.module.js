/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { TeamController } from './controllers/team.controller';
import { ProfessorsController } from './controllers/professors.controller';
import { LoginController} from './users/login.controller';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { AuthService } from './services/auth.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { NavbarTopDirective } from '../app/components/navbar/navbarTop.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';


angular.module('sg', ['ngAnimate', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap', 'toastr'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .constant('api', "http://sgaubg.herokuapp.com/apipie")
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .service('AuthService', AuthService)
  .controller('MainController', MainController)
  .controller('TeamController', TeamController)
  .controller('ProfessorsController', ProfessorsController)
  .controller('LoginController', LoginController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('topNavbar', NavbarTopDirective)
  .directive('acmeMalarkey', MalarkeyDirective);
