import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';

@Injectable()
export class NoteserviceService {
  today: Date;
  response: any = {};
  constructor(private httpservice: HttpService) { }



  updateNote(note, status, field) {

    if (field === 'pin') {
      note.pin = status;
    console.log('trashnote', note);
      this.httpservice.putService('updatenote', note).subscribe(response => {
        this.response = response;
        console.log(response);
      });

    } else if (field === 'trash') {
      note.trash = status;
      console.log('trashnote', note);
      this.httpservice.putService('updatenote', note).subscribe(response => {
        this.response = response;
        console.log(response);
      });



  } else if (field === 'archive') {
    note.archive = status;
    this.httpservice.putService('updatenote', note).subscribe(response => {
      this.response = response;
      console.log(response);
    });

  } else if (field === 'close') {
    this.httpservice.putService('updatenote', note).subscribe( response => {
      this.response = response;
      console.log(response);
    });
  }

  }
  deleteImage(note) {
this.httpservice.putService('updatenote', note).subscribe( response => {
  this.response = response;
  console.log(response.body);
});

  }
}

