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
 statusCode: string;
 response: any = {};

  constructor(private http: HttpService) { }


  // --------------------------------------------------------------------------
  login(): void {
    console.log('login', this.model);
    this.http.postServiceLogin('http://localhost:8080/ToDoApplication/login', this.model)
             .subscribe(response => {
             this.response = response;
            // localStorage.setItem('Authorization', response.headers.get('Authorization'));
            localStorage.setItem('Authorization', response.headers.get('Authorization'));
             });
            }

  // -------------------------------------------------------------------------

  ngOnInit() {
  }

}
