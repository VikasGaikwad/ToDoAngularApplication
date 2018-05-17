import { Component, OnInit } from '@angular/core';
import { NoteResponse } from '../../noteResponse';
import { NoteserviceService } from '../../service/noteservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-label-note',
  templateUrl: './label-note.component.html',
  styleUrls: ['./label-note.component.css']
})
export class LabelNoteComponent implements OnInit {
noteObj: NoteResponse[];
model: any;
public id;
  constructor(private noteService: NoteserviceService,
              private router: ActivatedRoute,
              ) { }

  ngOnInit() {
    this.noteService.getAllNotes().subscribe(data => {
      this.noteObj = data;
      // this.noteObj = data.body;

    });
    this.router.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
  }

}
