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
public notes;
model: any;
public id;
public labelId: number;
  constructor(private noteService: NoteserviceService,
              private router: ActivatedRoute,
              ) { }

  ngOnInit() {
    this.noteService.getAllNotes().subscribe(res => {
       this.notes = res;
     // console.log('note array', res.body);
    });
    this.router.params.subscribe(params => {
      // debugger;
      this.id = +params['id']; // (+) converts string 'id' to a number
      console.log('note label  component Id :', this.id);
    });
  }
}
