/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { TeamController } from './views_controllers/team/team.controller';
import { ProfessorsController } from './views_controllers/professors/professors.controller';
import { LoginController } from './views_controllers/users/login.controller';
import { ClubsController } from './views_controllers/clubs/clubs.controller';
import { InternshipsController } from './views_controllers/internships/internships.controller';
import { AddTeamMemberController } from './views_controllers/team/addTeamMember/addTeamMember.controller';
import { AddClubController } from './views_controllers/clubs/addClub/addClub.controller';
import { AddProfessorController } from './views_controllers/professors/addProfessor/addProfessor.controller';
import { AddInternshipController } from './views_controllers/internships/addInternship/addInternship.controller';
import { ProfessorDetailsController } from './views_controllers/professors/professorDetails/professorDetails.controller';
import { ClubDetailsController } from './views_controllers/clubs/clubDetails/clubDetails.controller';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { AuthService } from './services/auth.service';
import { AddTeamMemberService } from './services/addTeamMember.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MenuButtonDirective } from '../app/components/menuButton/menuButton.directive';
import { NavbarTopDirective } from '../app/components/navbar/navbarTop.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';


angular.module('sg', ['ngAnimate', 'angularModalService', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap', 'toastr'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .constant('api', "http://sgaubg.herokuapp.com/api/")
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .service('AuthService', AuthService)
  .service('AddTeamMemberService', AddTeamMemberService)
  .controller('MainController', MainController)
  .controller('TeamController', TeamController)
  .controller('ProfessorsController', ProfessorsController)
  .controller('LoginController', LoginController)
  .controller('InternshipsController', InternshipsController)
  .controller('ClubsController', ClubsController)
  .controller('AddTeamMemberController', AddTeamMemberController)
  .controller('AddProfessorController', AddProfessorController)
  .controller('AddClubController', AddClubController)
  .controller('AddInternshipController', AddInternshipController)
  .controller('ProfessorDetailsController', ProfessorDetailsController)
  .controller('ClubDetailsController', ClubDetailsController)
  .directive('acmeNavbar', NavbarDirective)
  .directive('menuButton', MenuButtonDirective)
  .directive('topNavbar', NavbarTopDirective)
  .directive('acmeMalarkey', MalarkeyDirective);
