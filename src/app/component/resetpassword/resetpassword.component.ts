import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  model: any = {};

  constructor(private httpser: HttpService, private router: Router) { }
  // ----------------------------------------------------------------------------------
  // resetpassword(): void {
  //   console.log('login', this.model);
  // const check = 'user/resetPassword' + window.location.search;
  //   this.httpser.postService(check, this.model).subscribe(response => {
  //   if (response.status.body === 200) {
  //   console.log('reset success');
  //   window.alert('User password reset successful..');
  //   } else if (response.status !== 200) {

  //   }
  //   });
  //   }
  resetPassword() {

    console.log(this.model);
    const check = 'resetPassword' + window.location.search;
    this.httpser.postService(check, this.model).subscribe( response => {
    if (response.body.statusCode === 100)     {
    console.log('your password reset successfully');
    alert('your password reset successfully');
    this.router.navigate(['/login']);
    }   else {
    console.log('Invalid Password or email');
    alert('your password reset successfully');
    }
    });
    }
  ngOnInit() {
  }

}
