import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from '../../http.service';
import { NoteResponse } from '../../noteResponse';
import { Subscription } from 'rxjs/Subscription';
import { NoteserviceService } from '../../service/noteservice.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent implements OnInit, OnDestroy {
  noteView: string = localStorage.getItem('class');

  notes: NoteResponse[];
  model: any = {};
  response: any = {};
  constructor(private http: HttpService, private noteService: NoteserviceService) { }


  todo: Subscription;
  ngOnInit() {
    // localStorage.getItem('Authorization');
    this.todo = this.http.getService('user/readallnotes').subscribe(response => {
      this.notes = response.body;
      this.changeGridCss();
    });
  }
  changeGridCss() {

    this.noteService.getStatus().subscribe((status) => {
      this.noteView = status ? 'list-view' : 'grid-view';
      localStorage.setItem('class', this.noteView);
    });
  }
  ngOnDestroy(): void {
    this.todo.unsubscribe();
  }
  deletenote(noteId): void {
    this.http.deleteService('user/  deletenote/' + noteId).subscribe(response => {
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

  // deleteNote(note, status, field) {

  //  // this.noteService.updateNote(noteId, status, field).subscribe(response => {
  //   this.noteService.updateNote(note, status, field).subscribe(response =>  {
  //     console.log(note);


  //   });
  //   }
}
