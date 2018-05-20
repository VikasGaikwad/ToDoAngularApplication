import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpService } from '../http.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LabelService {
  private labelSubject = new Subject<any>();
  public labels: Array<any> = [];
  constructor(private httpservice: HttpService) { }
  // @Output() changeLabel: EventEmitter<Array<any>> = new EventEmitter();


  // reloadLabels(): void {
  //   const path = 'user/readLabel';
  //   this.httpservice.getService(path)
  //                       .toPromise()
  //                         .then((res) => {
  //                           this.labels = res;
  //                           this.changeLabel.emit(res);
  //                           this.labelSubject.next(res);
  //                         });
  //  }
  // -------------------------------------------------------------------

  addLabelOnNote(labelId, noteId, checked) {
    return this.httpservice.putService('addLabelOnNotes/' + labelId + '/' + noteId + '/' + checked);
  }
  // -------------------------------------------------------------------
  createLabel(model) {
    return this.httpservice.postService('user/addlabel', model);
  }
  // -------------------------------------------------------------------
  deleteLabelOnNote(labelId, noteId?) {
    return this.httpservice.deleteService('user/deletelabelonnote/' + labelId + '/' + noteId);
  }
  // -------------------------------------------------------------------

  deleteLabel(labelId) {
    return this.httpservice.deleteService('user/deletelabel/' + labelId );
  }
  // -------------------------------------------------------------------

  updateLabel(label) {
    return this.httpservice.postService('user/updatelabel', label);
  }
  // -------------------------------------------------------------------
readLabel() {
return this.httpservice.getService('user/readLabel');
}
}
