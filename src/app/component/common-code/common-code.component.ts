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
import { NotesComponent } from '../notes/notes.component';
import { CollaboratorResponse } from '../../collaboratorResponse';

@Component({
  selector: 'app-common-code',
  templateUrl: './common-code.component.html',
  styleUrls: ['./common-code.component.css']
})
export class CommonCodeComponent implements OnInit {

  @Input() note: any;
  labels: LabelResponse[];
  object: ImageResponse;
  model: any = {};
  today: Date;
  url: string;
  response: any = {};
  notes: NoteResponse[];
  fileToUpload: File = null;
  collaborator: CollaboratorResponse;
 // -------------------------------------------------------------------
 unPin = '/assets/icons/unPin.svg';
 pinSVG = '/assets/pin.svg';
 color_blue = '/assets/icon/blue.png';
 color_brown = '/assets/icon/brown.png';
 color_green = '/assets/icon/green.png';
 color_lightyellow = '/assets/icon/lightyellow.png';
 color_pink = '/assets/icon/pink.png';
 color_purple = '/assets/icon/purple.png';
 color_red = '/assets/icon/red.png';

 // -------------------------------------------------------------------


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

 // -------------------------------------------------------------------

 constructor(
  private http: HttpService,
  public dialog: MatDialog,
  private noteService: NoteserviceService,
  private labelServiceObj: LabelService,
  private uploadService: UploadService) {

  }


 todo: Subscription;


 ngOnInit() {

 }


 updateNote(note, status, field) {

  this.todo = this.noteService.updateNote(note, status, field).subscribe(response => {
     console.log('successfully trashed...');
     this.noteService.reloadNotes();
   });
 }
 colorNote(note, status): void {
  note.status = status;
  console.log('trashnote', note);
  this.http.putService('updatenote', note)
  .subscribe(response => {
    this.response = response;

    console.log(response);
});
}


 reminder(note, day, field): void {

   if (day === 'Today') {
     this.today = new Date();
     this.today.setHours(20);
     this.today.setMinutes(0);
     this.today.setMilliseconds(0);
     note.reminder = this.today;

   } else if (day === 'Tomorrow') {
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
    // this.updateNote();
   }
   this.noteService.updateNote(note, status, field).subscribe(response => {
     this.response = response;
     this.noteService.reloadNotes();
   });
 }

 // -------------------------------------------------------------------


 openLabelDialog(label) {
   this.dialog.open(LabelNavComponent,
     {
       height: '325px',
       width: '280px',
       data: {
         labels: this.labels
       }
     });
 }

 // -------------------------------------------------------------------


 collaboratorDialogBox(note) {
   this.dialog.open(CollaboratorComponent, {
     height: '250px',
     width: '500px',
     data: note
   });
 }

 // -------------------------------------------------------------------

 readLabels() {
   console.log('label reading...');
   this.labelServiceObj.readLabel().subscribe(res => {
     this.labels = res.body;
     console.log('label data', this.labels);
     // this.refreshNote();
   });
 }

 // -------------------------------------------------------------------
 refreshNote() {
   this.noteService.reloadNotes();
  //  this.http.getService('readallnotes').subscribe(response => {
  //    this.notes = response.body;
  //  });
 }


 deleteImage(note): void {

   note.image = null;
   this.noteService.deleteImage(note);
   console.log('deleting image from noteId - ', note.noteId);

 }
 // -------------------------------------------------------------------


 addLabelOnNote(labelId, noteId, checked) {
   this.labelServiceObj.addLabelOnNote(labelId, noteId, checked)
     .subscribe(response => {
       console.log('successfull', response.body);

     });
   console.log('labelId-', labelId, 'noteId-', noteId, 'checked-', checked);
 }

 // -------------------------------------------------------------------



 handleFileInput(file: File, noteId) {
   console.log('file', file);
   this.uploadService.handleFileInput(file, noteId);


 }

 openNoteDialog(note) {
   this.dialog.open(UpdatenoteComponent, {
     data: note,
     height: '500px',
     width: '570px'
   });
 }


image (note) {
  if (note.pin) {
    return this.unPin;
  } else {
    return this.pinSVG;
  }
}
//  ngOnDestroy(): void {
//   this.todo.unsubscribe();
// }
pinUnpin(note) {

  if (note.pin === false) {
    this.unPinNote(note);
  } else {
    this.pinNote(note);
  }
}



 pinNote(note): any {
   note.pin = false;
  return this.noteService.updateNote(note).subscribe(response => {
    this.response = response;
    this.refreshNote();
    });

}
unPinNote(note) {
  note.pin = true;
  this.noteService.updateNote(note).subscribe(response => {
    this.response = response;
    console.log(response);
    this.refreshNote();
  });
}
deleteLabel(labelId): void {
  this.model = labelId;
  console.log(labelId);

this.labelServiceObj.deleteLabel(labelId).subscribe(response => {
console.log('label id----', labelId);
});
}
}
