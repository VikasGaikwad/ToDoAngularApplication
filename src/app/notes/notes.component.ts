import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { NoteResponse } from '../noteResponse';



@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})

export class NotesComponent implements OnInit {
  // get all html page data
  model: any = {};
  // show: boolean = false;
  response: any = {};
  notes: NoteResponse[];
  constructor(private http: HttpService) { }

  ngOnInit() {
    localStorage.getItem('Authorization');
    this.http.getService('http://localhost:8080/ToDoApplication/user/readallnotes').subscribe(response => {
this.notes = response;
    });
  }
 createnote(): void {
    console.log('createnote', this.model);
    // this.noteService.create()
    this.http.postService('http://localhost:8080/ToDoApplication/createnote', this.model)
             .subscribe(response => {
              this.response = response;
    console.log(response);



    });
    }
    deletenote(note, status): void {
      note.trash = status;

      console.log('deletenote', note);
this.http.putService('http://localhost:8080/ToDoApplication/user/updatenote', note)
.subscribe(response => {
  this.response = response;
console.log(response);
});
    }




}







