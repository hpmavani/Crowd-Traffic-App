import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonCard, IonContent, IonHeader, IonTitle, IonToolbar, IonButton} from '@ionic/angular/standalone';
import { UserService } from '../services/user.service';
import { callbackUri } from '../auth.config';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonCard, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  public userService = inject(UserService); 
  constructor() { }

  ngOnInit() {
    
  }

  login() {
    //const authUrl = `https://${environment.auth0Domain}/authorize?client_id=${environment.auth0ClientID}&response_type=code&redirect_uri=${callbackUri}&scope=openid%20profile%20email`;
    //window.location.href = authUrl; 
    //window.close(); 
    this.userService.login(); 
    //window.location.href = 'about:blank';
    

  }

  logout() {
    this.userService.logout(); 
  }

}
