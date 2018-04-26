import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';

@Injectable()
export class LabelService {

  constructor(private httpservice: HttpService) { }

  addLabelOnNote(labelId, noteId, checked) {

    this.httpservice.putService1('addLabelOnNotes/' +  labelId + '/' +  noteId + '/' + checked)
      .subscribe(response => {
        console.log('successfull', response);

      });
  }


}
