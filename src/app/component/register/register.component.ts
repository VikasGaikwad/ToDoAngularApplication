import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import {UserService} from '../../service/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // it will take any type of data
  model: any = {};
  constructor(private http: HttpService, private userservice: UserService) { }
  register(): void {
    console.log('register', this.model);
    this.userservice.registerUser(this.model);
    }

  ngOnInit() {




  }

}
