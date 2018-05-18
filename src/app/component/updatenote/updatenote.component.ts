
import { ViewChild, ElementRef, Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
 import { HttpService } from '../../http.service';
 import { NoteResponse } from '../../noteResponse';
 import { NoteserviceService } from '../../service/noteservice.service';
import { ImageResponse } from '../../imageResponse';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.css']
})
export class UpdatenoteComponent implements OnInit {
@ViewChild('title') title: ElementRef;
@ViewChild('description') description: ElementRef;


model: any = {};
notes: NoteResponse[];
object: ImageResponse[];

constructor(@Inject(MAT_DIALOG_DATA) private data: NoteResponse,
private commonService: HttpService,
private noteService: NoteserviceService,
public dialogRef: MatDialogRef<UpdatenoteComponent>) { }

ngOnInit() {
this.title.nativeElement.innerHTML = this.data.title;
this.description.nativeElement.innerHTML = this.data.description;
}

refreshNote(): void {
this.commonService.getService('user/readallnotes').subscribe(data => {
this.notes = data.body;

});
}

updateNote(note): void {
console.log('formValue', this.data);
this.commonService.putService('updatenote', this.data)
.subscribe(data => {
console.log(data);
   this.refreshNote();
this.dialogRef.close();
}) ;
}
deleteImage(note): void {
  // this.noteService.deleteImage(noteId) {
  note.image = null;
  this.noteService.deleteImage(note);
  console.log('deleting image from noteId - ', note);

}


}
