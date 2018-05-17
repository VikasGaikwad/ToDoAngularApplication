import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { HttpService } from '../../http.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { LabelResponse } from '../../labelResponse';
import { Subscription } from 'rxjs/Subscription';
import { LabelService } from '../../service/label.service';
import { NoteserviceService } from '../../service/noteservice.service';

@Component({
  selector: 'app-label-nav',
  templateUrl: './label-nav.component.html',
  styleUrls: ['./label-nav.component.css']
})

// -------------------------------------------------------------------

export class LabelNavComponent implements OnInit, OnDestroy {

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
        console.log('Label Created', response);
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
