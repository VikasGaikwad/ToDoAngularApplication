import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material';
import { FormGroup, FormControl, Validators, NgForm, FormGroupDirective } from '@angular/forms';
import { UserService } from '../../service/user.service';

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

  // ===============================================================


  emailControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
  ]);

  // ===============================================================


  passwordControl = new FormControl('', [
    Validators.required,
    Validators.pattern('.{4,12}'),
  ]);

  // ===============================================================

  matcher = new MyErrorStateMatcher();

  // ===============================================================


  constructor(
    private router: Router,
    private userService: UserService
  ) { }


  // ===============================================================


  login(): void {
    this.userService.login(this.model)
      .subscribe(response => {
        this.response = response;
        console.log('login response : ', response);
        if (response.status === 200) {
          localStorage.setItem('Authorization', response.headers.get('Authorization'));
          this.router.navigate(['/home/notes']);
          alert('login success');
        } else if (response.statusCode === 409) {
          this.router.navigate(['/login/']);
          alert('login failed');
        }
      });
  }

  // ===============================================================

  ngOnInit() {
  }

}

// ===============================================================

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

