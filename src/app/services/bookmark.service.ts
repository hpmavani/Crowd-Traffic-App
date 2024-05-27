import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Bookmark } from '../interfaces/bookmark';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  httpClient = inject(HttpClient); 
  url = environment.resourceUrl; 

  constructor() { }

  getAllBookmarks() { //returns an array of user bookmarks
    let url = `${this.url}/bookmarks/`; 
    this.httpClient.get<Bookmark>(url).subscribe(data => {
      return data; 
    }); 
    //need jwtToken for authorization
  }

  getBookmarkByName() {

  }

  addBookmark() {

  }

  deleteBookmark() {

  }
 
}
