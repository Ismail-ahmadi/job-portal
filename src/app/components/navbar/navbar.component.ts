import { Component, OnInit } from '@angular/core';
import { faPeopleLine, faHouseUser, faMagnifyingGlass, faArrowRightToBracket, faArrowRightFromBracket  } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  Logo = faPeopleLine;
  Admin = faHouseUser;
  Jobs = faMagnifyingGlass;
  Login = faArrowRightToBracket;
  Logout = faArrowRightFromBracket;
  currentLoginStatus$! : Observable<boolean>
  constructor(private loginService: LoginService){}
  ngOnInit(): void {
    this.currentLoginStatus$ = this.loginService.currentLoginStatus$;
    this.loginService.currentLoginStatus$.subscribe(data => console.log("Logged", data))
  }
  logout() {
    this.loginService.userLogout();
  }
}
