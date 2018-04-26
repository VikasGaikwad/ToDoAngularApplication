import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { CollaboratorResponse } from '../collaboratorResponse';
@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.css']
})
export class CollaboratorComponent implements OnInit {
collaborator: CollaboratorResponse [];
  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getService('reademail').subscribe(response => {
      this.collaborator = response.body;
      console.log(this.collaborator);
      });

}
}

