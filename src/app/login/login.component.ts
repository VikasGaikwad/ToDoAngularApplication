import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

// import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
model: any = {};
  constructor(private httpser: HttpService) { }
  // --------------------------------------------------------------------------
  login(): void {
    console.log('login', this.model);
    this.httpser.postService('http://localhost:8080/ToDoApplication/userapi/login', this.model).subscribe(response => {
    if (response.status.body === 200) {

    console.log('registration success');
console.log(response.headers.get('auth'));
    localStorage.setItem('auth', response.headers.get('auth'));
    window.alert('User registration successful..');
    } else if (response.status !== 200) {

    }
    });
    }
  // -------------------------------------------------------------------------

  ngOnInit() {
  }

}
