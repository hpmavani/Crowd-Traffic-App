import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonCard, IonInput, IonButton } from '@ionic/angular/standalone';
import { BookmarkService } from '../services/bookmark.service';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [LoginPage, CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonCard, IonInput, IonButton],
})
export class HomePage {
  private bookmarkService = inject(BookmarkService);
  
  constructor() {}
  
}
