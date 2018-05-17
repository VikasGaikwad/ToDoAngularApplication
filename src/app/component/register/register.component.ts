import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { UserService } from '../../service/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};
  response: any = {};

  // ===============================================================

  constructor(
    private userservice: UserService
              ) { }

  // ===============================================================

  register(): void {

    console.log('register', this.model);
    this.userservice.register(this.model).subscribe(response => {
      this.response = response;
    });

  }

  // ===============================================================

  ngOnInit() {




  }

}
