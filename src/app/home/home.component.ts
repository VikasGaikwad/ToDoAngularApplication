import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LabelNavComponent } from '../label-nav/label-nav.component';
import { Label } from '../Label';
// import { LabelNavComponent } from './label-nav/label-nav.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
// labels: LabelNavComponent[];
labels: Label[];
  constructor(  private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
  }
  openLabelDialog(label) {
    this.dialog.open(LabelNavComponent,
        {
         height: '325px',
           width: '300px',
          data : {
            labels : this.labels
        }
         });
       }

}

