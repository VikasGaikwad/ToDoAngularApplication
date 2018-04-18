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
    this.http.getService('readallnotes').subscribe(response => {
    this.notes = response.body;
    console.log(this.notes);
    });
  }
 createnote(): void {
    console.log('createnote', this.model);
    // this.noteService.create()
    this.http.postService('createnote', this.model)
             .subscribe(response => {
              this.response = response;
               console.log(response);
    });
    }
    trashnote(note, status): void {
      note.trash = status;

      console.log('trashnote', note);
      this.http.putService('updatenote', note)
      .subscribe(response => {
        this.response = response;

        console.log(response);
    });
    }




}







