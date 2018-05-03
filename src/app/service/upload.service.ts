import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';

@Injectable()
export class UploadService {

  constructor(private httpService: HttpService) { }

  handleFileInput(file, noteId) {

    this.httpService.postImageService('upload/', file, noteId).subscribe(response => {
      console.log('image response', response);
    //  console.log('image object', images);
    });

  }
}

