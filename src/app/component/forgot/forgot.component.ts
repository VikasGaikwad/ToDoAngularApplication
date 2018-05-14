import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';


@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  model: any = {};
  constructor(private http: HttpService) { }
  forgot(): void {
    console.log('forgot', this.model);
    this.http.postService('forgotpassword', this.model).subscribe(response => {
      if (response.status.body === 200) {
        console.log('password reset success..');
        window.alert('password reseted successfully');
        } else if (response.status !== 200) {
          window.alert('password not reseted successfully');
        }
        });
        }

  ngOnInit() {
  }

}
