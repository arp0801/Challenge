import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const BASEURL = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class UploadsService {

  constructor(public http: HttpClient) { }

  postImage(imageURL: any) {
    return this.http.post(BASEURL + 'images', imageURL);
  }

  getImages() {
    return this.http.get(BASEURL + 'images');
  }
}
