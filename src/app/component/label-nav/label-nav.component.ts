import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { HttpService } from '../../http.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { LabelResponse } from '../../labelResponse';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-label-nav',
  templateUrl: './label-nav.component.html',
  styleUrls: ['./label-nav.component.css']
})

// -------------------------------------------------------------------


export class LabelNavComponent implements OnInit, OnDestroy {
  model: any = {};
  @Input() labels: LabelResponse[];
  // -------------------------------------------------------------------

  constructor(private http: HttpService, public MatRef: MatDialogRef<LabelNavComponent>) { }
  todo: Subscription;
  // -------------------------------------------------------------------

  ngOnInit() {
   this.todo = this.http.getServiceLabel('readLabel').subscribe(response => {
      console.log('response', response);
      this.labels = response.body;
      console.log('labels:', this.labels);
    });
  }
  ngOnDestroy(): void {
    this.todo.unsubscribe();
  }

  // -------------------------------------------------------------------

  createLabel(): void {

    this.http.postserviceLabel('createLabel', this.model)
      .subscribe(response => {
        console.log('Label Created', response);

        this.MatRef.close();
      });
  }
}




























