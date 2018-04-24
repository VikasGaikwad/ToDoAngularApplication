import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LabelNavComponent } from '../label-nav/label-nav.component';
import { LabelResponse } from '../labelResponse';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
labels: LabelResponse[];
// private http: HttpService;
  constructor(private router: Router, public dialog: MatDialog, private commonService: HttpService) { }

  ngOnInit() {
    this.commonService.getServiceLabel('readLabel').subscribe(response => {
  console.log('response', response);
  this.labels = response.body;
  console.log('labels:', this.labels);
});
  }
  openLabelDialog(label) {
    this.dialog.open(LabelNavComponent,
        {
         height: '325px',
           width: '280px',
          data : {
            labels : this.labels
        }
         });
       }


}
