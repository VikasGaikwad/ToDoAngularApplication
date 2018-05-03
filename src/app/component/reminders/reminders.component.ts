import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../http.service';
import { NoteResponse } from '../../noteResponse';
@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.css']
})
export class RemindersComponent implements OnInit {
  notes: NoteResponse[];
  model: any = {};
  response: any = {};
  today: Date;

    constructor(private http: HttpService ) { }
    ngOnInit() {
      // localStorage.getItem('Authorization');
      this.http.getService('readallnotes').subscribe(response => {
        this.notes = response.body;
      });



    }
    reminder(note, day): void {
      if (day === 'Today') {
            this.today = new Date();
            this.today.setHours(20);
            this.today.setMinutes(0);
            this.today.setMilliseconds(0);
            note.reminder = this.today;

          } else if ( day === 'Tomorrow') {
               this.today = new Date();
               this.today.setDate(this.today.getDate() + 1);
               this.today.setHours(8);
               this.today.setMinutes(0);
             this.today.setMilliseconds(0);
               note.reminder = this.today;
          } else if (day === 'NextWeek') {
               this.today = new Date();
               this.today.setDate(this.today.getDate() + 6);
               this.today.setHours(8);
               this.today.setMinutes(0);
               this.today.setMilliseconds(0);
               note.reminder = this.today;
               } else if (day === 'null') {
               note.reminder = null;
               }
            this.http.putService('updatenote', note).subscribe(response => {
              this.response = response;
              console.log(response);
            });


    }
  }
