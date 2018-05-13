import { Component, Inject, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormsModule, FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { LabelNavComponent } from '../label-nav/label-nav.component';
import { LabelResponse } from '../../labelResponse';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpService } from '../../http.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  labels: LabelResponse[];
  homeForm: FormGroup;
  todo: Subscription;
inputFormControl: FormControl;
  // private http: HttpService;
  constructor(private builder: FormBuilder,
     private router: Router,
      public dialog: MatDialog,

      private commonService: HttpService) {
        this.inputFormControl = new FormControl();
        this.homeForm = this.builder.group({
        inputFormControl: this.inputFormControl
        });
      }

// to search my text


  ngOnInit() {
   this.todo =  this.commonService.getServiceLabel('readLabel').subscribe(response => {
      console.log('response', response);
      this.labels = response.body;
      console.log('labels:', this.labels);
    });
    this.searchText();
  }
  ngOnDestroy(): void {
this.todo.unsubscribe();
  }
  openLabelDialog(label) {
    this.dialog.open(LabelNavComponent,
      {
        height: '325px',
        width: '280px',
        data: {
          labels: this.labels
        }
      });
  }
  signOut() {
    localStorage.removeItem('Authorization');
    this.router.navigate(['/login/']);

  }
  searchText() {
    this.homeForm.valueChanges.subscribe(
    (formData) => {
    console.log(formData.inputFormControl);
    this.commonService.onDataChangeInSearch(formData.inputFormControl);
    });
    }


}
