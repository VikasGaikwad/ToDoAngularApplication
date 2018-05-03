import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';

@Injectable()
export class LabelService {

  constructor(private httpservice: HttpService) { }

// -------------------------------------------------------------------

  addLabelOnNote(labelId, noteId, checked) {
    return  this.httpservice.putService1('addLabelOnNotes/' +  labelId + '/' +  noteId + '/' + checked);
  }
// -------------------------------------------------------------------



}
