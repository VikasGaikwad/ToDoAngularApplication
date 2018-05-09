import { Component, OnInit, Input, Inject, OnDestroy } from '@angular/core';
import { HttpService } from '../../http.service';
import { CollaboratorResponse } from '../../collaboratorResponse';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NoteResponse } from '../../noteResponse';
import { UserResponse} from '../../userResponse';
import {CollaboratorService} from '../../service/collaborator.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.css']
})
export class CollaboratorComponent implements OnInit {
  sharedId: String;
  model: any = {};
  user: UserResponse;
  dataObj: NoteResponse;
  @Input() notes: NoteResponse[];
collaborators: CollaboratorResponse [];

  constructor(private http: HttpService, public MatRef: MatDialogRef<CollaboratorComponent>,
    private collaboratorService: CollaboratorService , @Inject(MAT_DIALOG_DATA) public data: NoteResponse) { }
    todo: Subscription;


  ngOnInit() {
    console.log('data', this.data);
    this.http.getService('getuser').subscribe(response => {
      this.user = response.body;
      console.log(this.collaborators);
      });



  }


// ngOnDestroy(): void {
// this.todo.unsubscribe();
// }

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





