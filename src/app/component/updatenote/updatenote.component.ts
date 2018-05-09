
import { ViewChild, ElementRef, Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
 import { HttpService } from '../../http.service';
 import { NoteResponse } from '../../noteResponse';

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


constructor(@Inject(MAT_DIALOG_DATA) private data: NoteResponse,
private commonService: HttpService,
public dialogRef: MatDialogRef<UpdatenoteComponent>) { }

ngOnInit() {
this.title.nativeElement.innerHTML = this.data.title;
this.description.nativeElement.innerHTML = this.data.description;
}

refreshNote(): void {
this.commonService.getService('readallnotes').subscribe(data => {
this.notes = data.body;

});
}

updateNote(): void {
console.log('formValue', this.data);
this.commonService.putService('updatenote', this.data)
.subscribe(data => {
console.log(data);
// this.refreshNote();
this.dialogRef.close();
}) ;
}
}