import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from '../../http.service';
import { NoteResponse } from '../../noteResponse';
import { SubscriptionList } from '@angular/flex-layout';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit, OnDestroy {
response: any = {};
notes: NoteResponse[];
  constructor(private http: HttpService ) { }
  todo: Subscription;
  ngOnInit() {
  this.todo =  this.http.getService('readallnotes').subscribe(response => {
      this.notes = response.body;
      console.log(this.notes);
      });
  }
  ngOnDestroy() {
    this.todo.unsubscribe();
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
