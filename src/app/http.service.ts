import { Injectable } from '@angular/core';

import { Response } from '@angular/http';
import { Headers } from '@angular/http/src/headers';
import { Observable } from 'rxjs/Observable';

import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { NoteResponse } from './noteResponse';
//  The @Injectable() decorator tells Angular that this service
//  might itself have injected dependencies.
@Injectable()
export class HttpService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
     'Authorization': localStorage.getItem('Authorization')
    })
    // observe: 'response' as 'response'

  };
  constructor(private http: HttpClient) {
    console.log();

    //  if (localStorage.getItem('Authorization')) {
    //    this.httpOptions.headers.append('Authorization', localStorage.getItem('Authorization'));
    // }
   }

  // The HTTP Client POST service sends HTTP POST requests to a trading partner's -
  // HTTP server via the perimeter server. This service works with the HTTP Client -
  // Begin service and the HTTP Client End service and through an instance of the HTTP -
  // Client adapter.

  postServiceLogin(url, obj): Observable<any> {
    return this.http.post<any>(url, obj, this.httpOptions);
  }
  postService(url, obj): Observable<any> {
  return this.http.post<any>(url, obj, this.httpOptions);
}
getService(url): Observable<NoteResponse[]> {
  // return this.http.get<any>(url, this.httpOptions);

  return this.http.get<NoteResponse[]>(url, this.httpOptions);


}

putService(url, note): Observable<any> {
  return this.http.put<any>(url , note, this.httpOptions );
}





}
