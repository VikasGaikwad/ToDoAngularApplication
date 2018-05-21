import { Component, OnInit, OnDestroy } from '@angular/core';
import {HttpService} from '../../http.service';
import { NoteResponse } from '../../noteResponse';
import { Subscription } from 'rxjs/Subscription';
import { NoteserviceService } from '../../service/noteservice.service';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.css']
})
export class RemindersComponent implements OnInit, OnDestroy {
  noteView: string = localStorage.getItem('class');
  notes: NoteResponse[];
  model: any = {};
  response: any = {};
  today: Date;

    constructor(
      private http: HttpService,
    private noteService: NoteserviceService
    ) { }
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
      this.todo = this.http.getService('user/readallnotes').subscribe(response => {
        this.notes = response.body;
      });
    }
    updateNote(note, status, field) {

      this.todo = this.noteService.updateNote(note, status, field).subscribe(response => {
         console.log('successfully trashed...');
         this.noteService.reloadNotes();
       });
     }

    // reminder(note, day): void {
    //   debugger;
    //   if (day === 'Today') {
    //         this.today = new Date();
    //         this.today.setHours(20);
    //         this.today.setMinutes(0);
    //         this.today.setMilliseconds(0);
    //         note.reminder = this.today;

    //       } else if ( day === 'Tomorrow') {
    //            this.today = new Date();
    //            this.today.setDate(this.today.getDate() + 1);
    //            this.today.setHours(8);
    //            this.today.setMinutes(0);
    //          this.today.setMilliseconds(0);
    //            note.reminder = this.today;
    //       } else if (day === 'NextWeek') {
    //            this.today = new Date();
    //            this.today.setDate(this.today.getDate() + 6);
    //            this.today.setHours(8);
    //            this.today.setMinutes(0);
    //            this.today.setMilliseconds(0);
    //            note.reminder = this.today;
    //            } else if (day === 'null') {
    //            note.reminder = null;
    //            }
    //         this.http.putService('updatenote', note).subscribe(response => {
    //           this.response = response;
    //           console.log(response);
    //         });


    // }
    ngOnDestroy(): void {
      this.todo.unsubscribe();
          }
  }
