import { Injectable } from '@angular/core';
import { HttpService } from './../http.service';

@Injectable()
export class UserService {

  constructor(private httpser: HttpService) { }

  registerUser(model) {

    this.httpser.postService('register', model);


  }
}
