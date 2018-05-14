import { Injectable } from '@angular/core';
import { HttpService } from './../http.service';

@Injectable()
export class UserService {

  constructor(private http: HttpService) { }

  registerUser(model) {

    this.http.postService('register', model);


  }
}
