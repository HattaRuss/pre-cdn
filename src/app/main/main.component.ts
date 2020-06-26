import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

declare var LoadFlexSlider: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [routerTransition()]
})
export class MainComponent implements OnInit {
  public sliders: Array<any> = [];
  public places: Array<any> = [];
  loginForm: FormGroup;
  error: {};
  loginError: string;
  display = 'none';
  appversion: any = 'v1.0.0.0';
  IsProgressBarLogin = false;
  public isCollapsed = true;

  constructor(private fb: FormBuilder, private AuthService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    // reset login status
    this.AuthService.logout();
    this.loginForm = this.fb.group({
      username: ['admin', Validators.required],
      password: ['admin123', Validators.required]
    });
    this.onLoadFlexiSlider();
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  onSubmit() {
    this.IsProgressBarLogin = true;
    const username = this.username.value;
    const password = this.password.value;
    if (username === 'admin' && password === 'admin123') {
      this.loginError = '';
      this.AuthService.sendToken(username);
      // this.router.navigate(['../admin']);
      this.IsProgressBarLogin = false;
    } else {
      this.loginError = 'Username or password is incorrect.';
      this.IsProgressBarLogin = false;
    }
  }

  onClickAdminModal() {
    this.display = 'block';
  }

  onCloseHandled() {
    this.display = 'none';
  }

  onLoadFlexiSlider() {
    return new LoadFlexSlider();
  }

  public scrollToAnchor(location: string, wait: number): void {
    const element = document.querySelector('#' + location);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
      }, wait);
    }
  }
}
