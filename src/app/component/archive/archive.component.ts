import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from '../../http.service';
import { NoteResponse } from '../../noteResponse';
import { SubscriptionList } from '@angular/flex-layout';
import { Subscription } from 'rxjs/Subscription';
import { NoteserviceService } from '../../service/noteservice.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit, OnDestroy {
  noteView: string = localStorage.getItem('class');

response: any = {};
notes: NoteResponse[];


  constructor(private http: HttpService , private noteService: NoteserviceService) { }
  todo: Subscription;
  ngOnInit() {
    this.getNotes();
    this.changeGridCss();
  }

  changeGridCss() {

    this.noteService.getStatus().subscribe((status) => {
      this.noteView = status ? 'list-view' : 'grid-view';
      localStorage.setItem('class', this.noteView);
    });
  }
getNotes() {
  this.todo =  this.noteService.getnotes().subscribe(response => {
    this.notes = response;
      console.log(this.notes);
      });
}

  // trashnote(note, status): void {
  //   note.archive = status;
  //   console.log('trashnote', note);
  //   this.noteService.trashNote(note)
  //                   .subscribe(response => {
  //                       this.response = response;
  //                       console.log(response);
  // });
  // }

  ngOnDestroy() {
    this.todo.unsubscribe();
     }
}
