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
pinSVG = '/assets/pin.svg';

  model: any = {};
  today: Date;

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
    archivenote(note, status): void {
      note.archive = status;
      console.log('trashnote', note);
      this.http.putService('updatenote', note)
      .subscribe(response => {
        this.response = response;

        console.log(response);
    });
    }
    pinnote(note, status): void {
      note.pin = status;


      console.log('trashnote', note);
      this.http.putService('updatenote', note)
      .subscribe(response => {
        this.response = response;

        console.log(response);
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


























    // reminderUpdate(note,day,field){
    //   if(day==='Today'){
    //   var today =new Date();
    //   today.setHours(20);
    //   today.setMinutes(0);
    //   today.setMilliseconds(0);
    //   note.reminder= today;
    //   }
    //   else if(day==='Tomorrow'){
    //   var today =new Date();
    //   today.setDate(today.getDate()+1);
    //   today.setHours(8);
    //   today.setMinutes(0);
    //   today.setMilliseconds(0);
    //   note.reminder= today;
    //   }
    // else if(day==='Next week'){
    //   var today =new Date();
    //   today.setDate(today.getDate()+6);
    //   today.setHours(8);
    //   today.setMinutes(0);
    //   today.setMilliseconds(0);
    //   note.reminder= today;
    //   }else if(day==='null'){
    //   note.reminder=null;
    //   }
    //   this.noteService.updateNotes(note,status,field).subscribe(response => {
    //   console.log("Archive response", response);
    //   });
    //   }



















