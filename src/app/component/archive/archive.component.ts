import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { NoteResponse } from '../../noteResponse';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
response: any = {};
notes: NoteResponse[];
  constructor(private http: HttpService ) { }

  ngOnInit() {
    this.http.getService('readallnotes').subscribe(response => {
      this.notes = response.body;
      console.log(this.notes);
      });
  }

  trashnote(note, status): void {
    note.archive = status;
    console.log('trashnote', note);
    this.http.putService('updatenote', note)
    .subscribe(response => {
      this.response = response;

      console.log(response);
  });
  }

  deletenote(noteId): void {
    this.http.deleteService('deletenote/' + noteId).subscribe(response => {
    console.log(response);
    });
      }


}
