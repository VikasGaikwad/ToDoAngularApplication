import { Component, OnInit, Input, Inject } from '@angular/core';
import { HttpService } from '../../http.service';
import { CollaboratorResponse } from '../../collaboratorResponse';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NoteResponse } from '../../noteResponse';
import { UserResponse} from '../../userResponse';
import {CollaboratorService} from '../../service/collaborator.service';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.css']
})
export class CollaboratorComponent implements OnInit {
  model: any = {};
  user: UserResponse;
  dataObj: NoteResponse;
  @Input() notes: NoteResponse[];
collaborator: CollaboratorResponse [];

  constructor(private http: HttpService, public MatRef: MatDialogRef<CollaboratorComponent>,
    private collaboratorService: CollaboratorService , @Inject(MAT_DIALOG_DATA) public data: NoteResponse) { }

  ngOnInit() {
    this.http.getService('getuser').subscribe(response => {
      this.user = response.body;
      console.log(this.collaborator);
      });
}

savecollaborator(noteId, model): void {
 //  console.log('savecollaborator', note, this.model);
this.collaboratorService.savecollaborator(noteId, this.model);

}
addcollaborator(): void {
  this.model.noteId = this.data.noteId;
  console.log(this.model);
  const query = 'addcollaborator?sharedId=' + this.model.sharedUser + '&noteId=' + this.model.noteId;
  this.collaboratorService.savecollaborator(query, {});
  }

}





