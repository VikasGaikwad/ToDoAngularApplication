import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  model: any = {};

  constructor(
    private http: HttpService,
    private router: Router,
    private userService: UserService
) { }
  // ----------------------------------------------------------------------------------

  resetPassword() {

    console.log(this.model);
    const check = 'resetPassword' + window.location.search;
    this.userService.resetPassword(check, this.model).subscribe( response => {
    if (response.body.statusCode === 200)     {
    console.log('your password reset successfully');
    this.router.navigate(['/login']);

    }   else {
    console.log('Invalid Password or email');
    }
    });
    }
  ngOnInit() {
  }

}
