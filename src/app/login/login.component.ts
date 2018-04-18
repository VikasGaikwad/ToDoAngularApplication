import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router} from '@angular/router';

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

  constructor(private http: HttpService, private router: Router) { }


  // --------------------------------------------------------------------------
  login(): void {
    // localStorage.clear();
    console.log('login', this.model);
    this.http.postServiceLogin('login', this.model)
             .subscribe(response => {
             this.response = response;
            if (response.body.statusCode === 200) {
              localStorage.setItem('Authorization', response.headers.get('Authorization'));
              console.log('Authorization');
              this.router.navigate(['/home/notes']);
               } else if (response.body.statusCode === 400) {
            this.router.navigate(['/login/']);
            console.log('lagin failed');
               }
            //   }
               });
             }

  // -------------------------------------------------------------------------

  ngOnInit() {
  }

}



