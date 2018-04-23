import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { Label } from '../Label';
@Component({
  selector: 'app-label-nav',
  templateUrl: './label-nav.component.html',
  styleUrls: ['./label-nav.component.css']
})
export class LabelNavComponent implements OnInit {
  model: any = {};

  @Input() labels: Label[];
  constructor(private http: HttpService, public MatRef: MatDialogRef<LabelNavComponent>) { }

  ngOnInit() {
  }

  createLabel(): void {

          this.http.postserviceLabel('createLabel', this.model)
          .subscribe(response => {
             console.log('Label Created', response);

             this.MatRef.close();
          });
       }
      }




























