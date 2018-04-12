import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})

export class NotesComponent implements OnInit {
  model: any = {};
  constructor(private httpser: HttpService) { }


 createnote(): void {
    console.log('done', this.model);
    this.httpser.postService('http://localhost:8080/ToDoApplication/userapi/createnote', this.model).subscribe(response => {
    if (response.status.body === 200) {
    console.log('note added successfully');
    window.alert('note added successfully');
    } else if (response.status !== 200) {

    }
    });
    }
  ngOnInit() {
  }

}
