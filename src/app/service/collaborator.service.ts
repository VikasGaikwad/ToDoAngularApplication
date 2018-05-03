import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';


@Injectable()
export class CollaboratorService {

  constructor(private httpService: HttpService) { }

  savecollaborator(url: string, model: any) {

  this.httpService.postService(url, model).subscribe(response => {
  console.log('successfull', response.body);
     });
  }


}
