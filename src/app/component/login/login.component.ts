import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router} from '@angular/router';
import { ErrorStateMatcher } from '@angular/material';
import { FormGroup, FormControl, Validators, NgForm, FormGroupDirective } from '@angular/forms';

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
 emailControl = new FormControl('', [
  Validators.required,
  Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
]);

passwordControl = new FormControl('', [
  Validators.required,
  Validators.pattern('.{4,12}'),
]);
matcher = new MyErrorStateMatcher();


  constructor(private http: HttpService, private router: Router) { }


  // --------------------------------------------------------------------------
  login(): void {
    // localStorage.clear();
    console.log('login', this.model);
    this.http.postServiceLogin('login', this.model)
             .subscribe(response => {
             this.response = response;
             console.log('response : ', response);
             if (response.status === 200) {
               localStorage.setItem('Authorization', response.headers.get('Authorization'));
               console.log('Authorization');
               this.router.navigate(['/home/notes']);
                } else if (response.status === 400) {
             this.router.navigate(['/login/']);
             console.log('lagin failed');
               }

               });
             }

  // -------------------------------------------------------------------------

  ngOnInit() {
  }

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

