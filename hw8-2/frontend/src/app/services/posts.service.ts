import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpclient: HttpClient) { }
    getAllPost() {
      let URL = "http://localhost:8080/posts";
      return this.httpclient.get(URL);
  }
}
