import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { NoteResponse } from '../noteResponse';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscriber } from 'rxjs/Subscriber';

@Injectable()
export class NoteserviceService {
  today: Date;
path: string;
  response: any = {};
  private noteSubject = new Subject<any>();

  constructor(private httpservice: HttpService) { }

  reloadNotes(): void {
    const path = 'user/readallnotes';
    this.httpservice.getService(path)
                        .toPromise()
                          .then((res) => {
                            this.noteSubject.next(res.body); // To re subscribe
                                                    });
   }


  getnotes(): Observable<NoteResponse[]> {
    setTimeout(this.reloadNotes.bind(this));
      return this.noteSubject.asObservable();
  }

getAllNotes(): Observable<NoteResponse[]> {
    //  const path = 'getNotes';
    const path = 'user/readallnotes';
    return this.httpservice.getService(path);
  }
  updateNote(note, status?, field?): Observable<any> {

      if (field === 'trash') {
      note.trash = status;
      console.log('trashnote', note);

    } else if (field === 'archive') {
      note.archive = status;
    } else if (field === 'close') {


    } else if (field === 'reminder') {

    }
    return this.httpservice.putService('updatenote', note);
  }



  deleteImage(note) {
    this.httpservice.putService('user/updatenote', note).subscribe(response => {
      this.response = response;
      console.log(response.body);
    });

  }

  createNote(model): Observable<any>  {
   return this.httpservice.postService('user/createnote', model);
  }

  trashNote(note): any {

return this.httpservice.putService('updatenote', note);
  }
}

