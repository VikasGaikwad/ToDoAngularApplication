import { Injectable, OnDestroy, Inject, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { NoteResponse } from '../../noteResponse';
import { LabelNavComponent } from '../label-nav/label-nav.component';
import { LabelResponse } from '../../labelResponse';
import { LabelService } from '../../service/label.service';
import { UploadService } from '../../service/upload.service';
import { ImageResponse } from '../../imageResponse';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NoteserviceService } from '../../service/noteservice.service';
import { CollaboratorComponent } from '../collaborator/collaborator.component';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';
import { Subscription } from 'rxjs/Subscription';
import { FormsModule, FormGroup, FormControl, FormBuilder } from '@angular/forms';

// -------------------------------------------------------------------

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
// -------------------------------------------------------------------

export class NotesComponent implements OnInit, OnDestroy {

  noteView: string = localStorage.getItem('class');

  labels: LabelResponse[];
  object: ImageResponse;
  model: any = {};
  today: Date;
  url: string;
  response: any = {};
  notes: NoteResponse[];
  fileToUpload: File = null;

  // search
  noteForm: FormGroup;
  inputFormControl: FormControl;
  searchText: string;
  // -------------------------------------------------------------------
  // unPin = '/assets/icons/unPin.svg';
  // pinSVG = '/assets/pin.svg';
  // color_blue = '/assets/icon/blue.png';
  // color_brown = '/assets/icon/brown.png';
  // color_green = '/assets/icon/green.png';
  // color_lightyellow = '/assets/icon/lightyellow.png';
  // color_pink = '/assets/icon/pink.png';
  // color_purple = '/assets/icon/purple.png';
  // color_red = '/assets/icon/red.png';

  // -------------------------------------------------------------------


  // colors = [{
  //   color: '#f26f75',
  //   path: '/assets/icons/Red.png'
  // }, {
  //   color: '#fcff77',
  //   path: '/assets/icons/lightyellow.png'
  // }, {
  //   color: '#80ff80',
  //   path: '/assets/icons/green.png'
  // }, {
  //   color: '#9ee0ff',
  //   path: '/assets/icons/blue.png'
  // }, {
  //   color: '#9966ff',
  //   path: '/assets/icons/purple.png'
  // }, {
  //   color: '#ff99cc',
  //   path: '/assets/icons/pink.png'
  // }, {
  //   color: '#a52a2a',
  //   path: '/assets/icons/brown.png'
  // }
  // ];

  // -------------------------------------------------------------------

  constructor(
    private http: HttpService, public dialog: MatDialog,
    private noteService: NoteserviceService,
    private labelObj: LabelService,
    private uploadService: UploadService) {
    http.searchObservable$.subscribe(
      formData => {
        this.searchText = formData;
        console.log('in note component, ', formData);
      });
  }


  todo: Subscription;

  ngOnInit() {
    this.readNote();
    this.changeGridCss();
  }

  changeGridCss() {

    this.noteService.getStatus().subscribe((status) => {
      this.noteView = status ? 'list-view' : 'grid-view';
      localStorage.setItem('class', this.noteView);
    });
  }


  readNote(): void {
    this.todo = this.noteService.getnotes()
      .subscribe(response => {
        this.notes = response;
        //  this.notes = response;
        this.notes.forEach(note => {
          note.imageString = 'data:image/JPEG;base64,' + note.image;
          console.log('#############', this.notes);
        });
      });

  }
  refreshNote() {
    this.noteService.reloadNotes();
  }

  createnote(): void {
    console.log('createnote', this.model);
    this.noteService.createNote(this.model).subscribe(response => {
      this.response = response;
      console.log(response);
      this.refreshNote();
    });
  }



  ngOnDestroy(): void {
    this.todo.unsubscribe();

  }

  // updateNote(note, status, field) {

  //   this.noteService.updateNote(note, status, field);

  // }
  // -------------------------------------------------------------------


  // reminder(note, day): void {
  //   if (day === 'Today') {
  //     this.today = new Date();
  //     this.today.setHours(20);
  //     this.today.setMinutes(0);
  //     this.today.setMilliseconds(0);
  //     note.reminder = this.today;

  //   } else if (day === 'Tomorrow') {
  //     this.today = new Date();
  //     this.today.setDate(this.today.getDate() + 1);
  //     this.today.setHours(8);
  //     this.today.setMinutes(0);
  //     this.today.setMilliseconds(0);
  //     note.reminder = this.today;
  //   } else if (day === 'NextWeek') {
  //     this.today = new Date();
  //     this.today.setDate(this.today.getDate() + 6);
  //     this.today.setHours(8);
  //     this.today.setMinutes(0);
  //     this.today.setMilliseconds(0);
  //     note.reminder = this.today;
  //   } else if (day === 'null') {
  //     note.reminder = null;
  //   }
  //   this.http.putService('updatenote', note).subscribe(response => {
  //     this.response = response;
  //     console.log(response);
  //   });
  // }

  // -------------------------------------------------------------------


  // openLabelDialog(label) {
  //   this.dialog.open(LabelNavComponent,
  //     {
  //       height: '325px',
  //       width: '280px',
  //       data: {
  //         labels: this.labels
  //       }
  //     });
  // }

  // -------------------------------------------------------------------


  // collaboratorDialogBox(note) {
  //   this.dialog.open(CollaboratorComponent, {
  //     height: '250px',
  //     width: '500px',
  //     data: note
  //   });
  // }


  // -------------------------------------------------------------------


  // readLabels() {
  //   console.log('message---------');
  //   this.http.getServiceLabel('readLabel').subscribe(res => {
  //     this.labels = res.body;
  //     console.log('data', this.labels);
  //   });
  // }

  // -------------------------------------------------------------------
  // refreshNote(path) {
  //   this.http.getService('readallnotes').subscribe(response => {
  //     this.notes = response.body;
  //   });
  // }







  // deleteImage(note): void {
  //   // this.noteService.deleteImage(noteId) {
  //   note.image = null;
  //   this.noteService.deleteImage(note);
  //   console.log('deleting image from noteId - ', note);

  // }
  // -------------------------------------------------------------------
  //   refreshLabel() {
  // this.labelObj.reloadLabel();
  //   }
  // addLabelOnNote(labelId, noteId, checked) {
  //   this.labelObj.addLabelOnNote(labelId, noteId, checked)
  //     .subscribe(response => {
  //       console.log('successfull', response.body);
  //     //  this.refreshLabel();
  //     });
  //   console.log('labelId-', labelId, 'noteId-', noteId, 'checked-', checked);
  // }

  // -------------------------------------------------------------------
  // handleFileInput(file: File, noteId) {
  //   console.log('file', file);
  //   this.uploadService.handleFileInput(file, noteId);
  // }
  // openNoteDialog(note) {
  //   this.dialog.open(UpdatenoteComponent, {
  //     data: note,
  //     height: '300px',
  //     width: '500px'
  //   });
  // }


}
