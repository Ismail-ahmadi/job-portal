import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { filter, tap } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm!: FormGroup;
  constructor( private loginService: LoginService, private router: Router){}
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'password' : new FormControl(null, [Validators.required, Validators.minLength(6)]),
    })
    this.loginService.currentLoginStatus$.pipe(
      filter(status => !!status),
      tap(() => this.router.navigateByUrl('/'))
    ).subscribe();
  }
  get userEmail() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get isEmailInValid() {
    return !this.loginForm.get('email')?.valid && this.loginForm.get('email')?.touched;
  }

  get isPasswordInValid() {
    return !this.loginForm.get('password')?.valid && this.loginForm.get('password')?.touched;
  }
  onSubmit(){
    console.log(this.loginForm.value);
    const {email, password } = this.loginForm.value;
    this.loginService.userLoging(email, password);
  }

}
