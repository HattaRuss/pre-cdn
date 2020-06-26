import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {
    constructor( private router: Router) { }

    sendToken(token: string) {
        localStorage.setItem('LoggedInUser', token);
        this.router.navigate(['../admin']);
        // this.router.navigate(['../admin-new']);
    }

    getToken() {
        return localStorage.getItem('LoggedInUser');
    }

    isLoggedIn() {
        return this.getToken() !== null;
    }

    logout() {
        localStorage.removeItem('LoggedInUser');
        this.router.navigate(['/main']);
    }
}
