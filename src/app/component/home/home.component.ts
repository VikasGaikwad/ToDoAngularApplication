import { Component, Inject, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { LabelNavComponent } from '../label-nav/label-nav.component';
import { LabelResponse } from '../../labelResponse';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HttpService } from '../../http.service';
import { Subscription } from 'rxjs/Subscription';
import { CommonCodeComponent } from '../common-code/common-code.component';
import { UserResponse } from '../../userResponse';
import { NoteserviceService } from '../../service/noteservice.service';
// import { CollaboratorResponse } from '../../collaboratorResponse';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  labels: LabelResponse[];
  user: UserResponse;
  homeForm: FormGroup;
  todo: Subscription;
  commonCodeObject: CommonCodeComponent;
  inputFormControl: FormControl;

  // collaborators: CollaboratorResponse [];
  // private http: HttpService;
  constructor(private builder: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    private http: HttpService,
    private noteServiceObj: NoteserviceService,
    private commonService: HttpService) {
    this.inputFormControl = new FormControl();
    this.homeForm = this.builder.group({
      inputFormControl: this.inputFormControl
    });
  }

  // to search my text


  ngOnInit() {
    this.readLabel();
    this.searchText();
    this.getuser();
  }
  getuser() {
    this.http.getService('user/getuser').subscribe(response => {
      this.user = response.body;
      });
  }
readLabel() {
  this.todo = this.commonService.getService('user/readLabel').subscribe(response => {
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

  ngOnDestroy(): void {
    this.todo.unsubscribe();
  }
  viewlist() {
    this.noteServiceObj.changeView();
  }
}
