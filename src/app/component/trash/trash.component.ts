import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../http.service';
import { NoteResponse } from '../../noteResponse';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent implements OnInit {
notes: NoteResponse[];
model: any = {};
response: any = {};
  constructor(private http: HttpService ) { }

  ngOnInit() {
    // localStorage.getItem('Authorization');
    this.http.getService('readallnotes').subscribe(response => {
      this.notes = response.body;
    });



  }
  deletenote(noteId): void {
this.http.deleteService('deletenote/' + noteId).subscribe(response => {
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
