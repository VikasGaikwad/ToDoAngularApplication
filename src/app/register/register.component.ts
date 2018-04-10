import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // it will take any type of data
  model: any = {};
  constructor(private httpser: HttpService) { }
  register(): void {
    console.log('register', this.model);
    this.httpser.postService('http://localhost:8080/ToDoApplication/register', this.model).subscribe(response => {
    if (response.status.body === 200) {
    console.log('registration success');
    alert('User registration successful..');
    } else if (response.status !== 200) {

    }
    });
    }



  ngOnInit() {




  }

}
