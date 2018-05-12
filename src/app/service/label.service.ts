import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';

@Injectable()
export class LabelService {

  constructor(private httpservice: HttpService) { }

  // -------------------------------------------------------------------

  addLabelOnNote(labelId, noteId, checked) {
    return this.httpservice.putService1('addLabelOnNotes/' + labelId + '/' + noteId + '/' + checked);
  }
  // -------------------------------------------------------------------
  createLabel(model) {
    return this.httpservice.postService('addlabel', model);
  }
  // -------------------------------------------------------------------


  deleteLabel(labelId) {
    return this.httpservice.deleteService('deletelabel/' + labelId);
  }
  // -------------------------------------------------------------------

  updateLabel(label) {
    return this.httpservice.postService('updatelabel', label);
  }
  // -------------------------------------------------------------------

}
