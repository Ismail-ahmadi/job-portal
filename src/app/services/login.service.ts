import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  pipe() {
    throw new Error('Method not implemented.');
  }
  private login = new BehaviorSubject(false);

  constructor( private router: Router) { }
  get currentLoginStatus$() {
    return this.login.asObservable();
  }
  userLoging(email: string, password: string | number){
    if(email === 'ismail@humber.ca' && password === '123456'){
      this.login.next(true)
    }
  }
  userLogout(){
    this.login.next(false);
    this.router.navigateByUrl('/login')
  }
}

