import { Injectable } from '@angular/core';
import { HttpService } from './../http.service';
import { NoteResponse } from '../noteResponse';

@Injectable()
export class UserService {

  constructor(private http: HttpService) { }

  // ===============================================================

  register(model) {

   return this.http.postService('register', model);

  }
  // ===============================================================
  login(model) {

    return this.http.postService('login', model);

  }
  forgot(model) {
    return this.http.postService('forgotpassword', model);
  }
}

