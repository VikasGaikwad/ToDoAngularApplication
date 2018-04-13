import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})

export class NotesComponent implements OnInit {
  model: any = {};
  // show: boolean = false;

  constructor(private httpser: HttpService) { }


 createnote(): void {
    console.log('createnote', this.model);
    this.httpser.postService('http://localhost:8080/ToDoApplication/userapi/createnote', this.model).subscribe(response => {

    console.log('note added successfully');
    window.alert('note added successfully');


    });
    }

  ngOnInit() {
  }

}
