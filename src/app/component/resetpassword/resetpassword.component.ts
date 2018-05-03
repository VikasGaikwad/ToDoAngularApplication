import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  model: any = {};

  constructor(private httpser: HttpService) { }
  // ----------------------------------------------------------------------------------
  resetpassword(): void {
    console.log('login', this.model);
    this.httpser.postService('http://localhost:8080/ToDoApplication/userapi/resetPassword/', this.model).subscribe(response => {
    if (response.status.body === 200) {
    console.log('reset success');
    window.alert('User password reset successful..');
    } else if (response.status !== 200) {

    }
    });
    }
  ngOnInit() {
  }

}
