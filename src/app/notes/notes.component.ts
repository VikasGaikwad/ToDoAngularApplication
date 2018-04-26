import { Injectable } from '@angular/core';

import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { NoteResponse } from '../noteResponse';
import { LabelNavComponent } from '../label-nav/label-nav.component';
import { LabelResponse } from '../labelResponse';
import { LabelService } from '../commonservices/label.service';


import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { CollaboratorComponent } from '../collaborator/collaborator.component';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})

export class NotesComponent implements OnInit {
  // get all html page data
  labels: LabelResponse[];
  pinSVG = '/assets/pin.svg';
  color_blue = '/assets/icon/blue.png';
  color_brown = '/assets/icon/brown.png';
  color_green = '/assets/icon/green.png';
  color_lightyellow = '/assets/icon/lightyellow.png';
  color_pink = '/assets/icon/pink.png';
  color_purple = '/assets/icon/purple.png';
  color_red = '/assets/icon/red.png';



  colors = [{
    color: '#f26f75',
    path: '/assets/icons/Red.png'
    }, {
    color: '#fcff77',
    path: '/assets/icons/lightyellow.png'
    }, {
    color: '#80ff80',
    path: '/assets/icons/green.png'
    }, {
    color: '#9ee0ff',
    path: '/assets/icons/blue.png'
    }, {
    color: '#9966ff',
    path: '/assets/icons/purple.png'
    }, {
    color: '#ff99cc',
    path: '/assets/icons/pink.png'
    }, {
    color: '#a52a2a',
    path: '/assets/icons/brown.png'
    }
    ];


  model: any = {};
  today: Date;

  // show: boolean = false;
  response: any = {};
  notes: NoteResponse[];
  constructor(private http: HttpService, public dialog: MatDialog, private labelObj: LabelService) { }

  ngOnInit() {
    this.http.getService('readallnotes').subscribe(response => {
    this.notes = response.body;
    console.log(this.notes);
    });
  }

//   ngOnInit() {
//     this.commonService.getService('getNotes').subscribe(res => {
//     this.notes = res;
//   });
// }



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
    openLabelDialog(label) {
      this.dialog.open(LabelNavComponent,
          {
           height: '325px',
             width: '280px',
            data : {
              labels : this.labels
          }
           });
         }

         collaboratorDialogBox() {
           this.dialog.open(CollaboratorComponent, {
             height: '300px',
             width: '200px'
           });
         }

        readLabels() {
          console.log('message---------');
          this.http.getServiceLabel('readLabel').subscribe(res => {
            this.labels = res.body;
            console.log('data', this.labels);
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
        addLabelOnNote(labelId, noteId, checked) {

          this.labelObj.addLabelOnNote(labelId, noteId, checked);
          console.log('labelId-', labelId, 'noteId-', noteId, 'checked-', checked);

          }


  }




















