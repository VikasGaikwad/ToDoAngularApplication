import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import { NoteResponse } from '../noteResponse';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent implements OnInit {
notes: NoteResponse[];
model: any = {};
  constructor(private http: HttpService ) { }

  ngOnInit() {
    // localStorage.getItem('Authorization');
    this.http.getService('readallnotes').subscribe(response => {
      this.notes = response.body;
    });

   //  deletenote

  }
  deletenote(): void {
this.http.deleteService('deletenote', this.model).subscribe(response => {
  // this.response = response;
});
  }

}
