import { Component } from '@angular/core';
import { faPeopleLine, faHouseUser, faMagnifyingGlass, faArrowRightToBracket, faArrowRightFromBracket  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  Logo = faPeopleLine;
  Admin = faHouseUser;
  Jobs = faMagnifyingGlass;
  Login = faArrowRightToBracket;
  Logout = faArrowRightFromBracket;
}
