import { Injectable, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { Browser } from '@capacitor/browser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  authService = inject(AuthService); 
  private doc = inject(DOCUMENT); 
  public isAuthenticated$ = this.authService.isAuthenticated$; 
  
  constructor() { }

  login() {
    //this.authService.loginWithRedirect(); 
    this.authService
      .loginWithRedirect({
        async openUrl(url: string) {
          return Browser.open({ url, windowName: '_self' });
        }
      })
      .subscribe();
     
      this.authService.error$.subscribe(x=>{
        console.log(x);
      })
  }

  logout() {
    this.authService.logout({
      logoutParams: {
        returnTo: this.doc.location.origin,
      }
    });
  }

  

}
