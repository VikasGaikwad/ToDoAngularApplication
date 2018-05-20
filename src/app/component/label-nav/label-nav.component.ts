import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { HttpService } from '../../http.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { LabelResponse } from '../../labelResponse';
import { Subscription } from 'rxjs/Subscription';
import { LabelService } from '../../service/label.service';
import { NoteserviceService } from '../../service/noteservice.service';
import { Observable } from 'rxjs/Observable';
import { HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-label-nav',
  templateUrl: './label-nav.component.html',
  styleUrls: ['./label-nav.component.css']
})

// -------------------------------------------------------------------

export class LabelNavComponent implements OnInit, OnDestroy {
  private allLabelSubject = new Subject<any>();
  @Input() label: LabelResponse[];
  model: any = {};
  @Input() labels: LabelResponse[];
  todo: Subscription;

  // -------------------------------------------------------------------
  constructor(
    private http: HttpService,
    public MatRef: MatDialogRef<LabelNavComponent>,
    private labelServiceObj: LabelService,
    private noteService: NoteserviceService
  )   { }

  // -------------------------------------------------------------------
  ngOnInit() {
    this.readLabel();
    this.labelServiceObj.readLabel();
  }
  // refreshLabel(): void {
  //   this.labelServiceObj.readLabel()
  //                         .toPromise()
  //                           .then(response => {
  //                             this.label = response;
  //                              console.log('Labels fetched successfully..');
  //                           });
  // }
  getAllLabel(): Observable<HttpResponse<any>> {
    this.loadAllLabel();
     return this.allLabelSubject.asObservable();
    }
    loadAllLabel(): void {
      const path = 'user/readLabel';
      this.http.getService(path)
      .toPromise().then((res) => {
      this.allLabelSubject.next(res);
      });
  }

  readLabel() {
    this.todo = this.labelServiceObj.readLabel().subscribe(response => {
      console.log('response', response);
      this.labels = response.body;
      console.log('labels:', this.labels);

    });
  }
  // -------------------------------------------------------------------

  createLabel(): void {
    this.todo = this.labelServiceObj.createLabel(this.model)
      .subscribe(response => {
        this.labelServiceObj.readLabel();
        console.log('Label Created', response);
        // this.labelServiceObj.reloadLabels();
        this.MatRef.close();

      });
  }
  deleteLabel(labelId): void {
    this.model = labelId;
    console.log(labelId);
    this.labelServiceObj.deleteLabel(labelId).subscribe(response => {
      console.log('label id----', labelId);
    });
  }

  updateLabel(label): void {
    this.labelServiceObj.updateLabel(label).subscribe(response => {
      console.log();
    });
  }

  ngOnDestroy(): void {
    this.todo.unsubscribe();
  }
}
