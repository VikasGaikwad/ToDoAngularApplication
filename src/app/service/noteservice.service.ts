import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { NoteResponse } from '../noteResponse';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class NoteserviceService {
  today: Date;
path: string;
  response: any = {};
  constructor(private httpservice: HttpService) { }



getAllNotes(): Observable<NoteResponse[]> {
     const path = 'getNotes';
    return this.httpservice.getService(path);
  }
  updateNote(note, status?, field?): any {

    if (field === 'pin') {
      note.pin = status;
      console.log('trashnote', note);
     return this.httpservice.putService('updatenote', note);

    } else if (field === 'trash') {
      note.trash = status;
      console.log('trashnote', note);
     return this.httpservice.putService('updatenote', note);



    } else if (field === 'archive') {
      note.archive = status;
      this.httpservice.putService('updatenote', note);

    } else if (field === 'close') {
      this.httpservice.putService('updatenote', note);
    } else if (field === 'reminder') {
      this.httpservice.putService('updatenote', note);
    }
    this.httpservice.putService('updatenote', note);
  }



  deleteImage(note) {
    this.httpservice.putService('updatenote', note).subscribe(response => {
      this.response = response;
      console.log(response.body);
    });

  }
}

