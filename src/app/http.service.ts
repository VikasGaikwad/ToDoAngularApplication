import { Injectable } from '@angular/core';

import { Response } from '@angular/http';
import { Headers } from '@angular/http/src/headers';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { NoteResponse } from './noteResponse';
import {LabelResponse } from './labelResponse';
//  The @Injectable() decorator tells Angular that this service
//  might itself have injected dependencies.



@Injectable()
export class HttpService {
  base_Url = 'http://localhost:8080/ToDoApplication/user/';
  noteUrl = 'http://localhost:8080/ToDoApplication/';
  urlPath: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    }),
    // observe: 'response'
    observe: 'response' as 'response'
  };
  constructor(private http: HttpClient, ) {
  }

  appendToken(): void {
    console.log(localStorage.getItem('Authorization'));

    if ( localStorage.getItem('Authorization') ) {
     // localStorage.removeItem('Authorization');

      this.httpOptions.headers = this.httpOptions.headers.set('Authorization', localStorage.getItem('Authorization'));
    }
  }

  // The HTTP Client POST service sends HTTP POST requests to a trading partner's -
  // HTTP server via the perimeter server. This service works with the HTTP Client -
  // Begin service and the HTTP Client End service and through an instance of the HTTP -
  // Client adapter.

  postServiceLogin(loginUrl, userObj): Observable<any> {
    this.urlPath = this.noteUrl.concat(loginUrl);
    return this.http.post<any>(this.urlPath, userObj, this.httpOptions);
  }
  // createHeader(header: Headers) {
  //   header.append('Authorization', localStorage.getItem('Authorization'));
  // }
  // putService1(path): Observable<any> {
  //   const header = new Headers();
  //   this.createHeader(header);
  //   return this.http.post(path, {
  //     header: header
  //   });
  // }
  postserviceLabel(createLabel, obj): Observable<any>  {
    this.urlPath = this.base_Url.concat('addlabel');
    return this.http.post<any>(this.urlPath, obj, this.httpOptions);
  }

  // getService(readallnotes): Observable<NoteResponse[]> {
  getService(readallnotes): Observable<any> {
    this.urlPath = this.base_Url.concat(readallnotes);
    this.appendToken();
    return this.http.get<NoteResponse[]>(this.urlPath , this.httpOptions);
  }
  getServiceLabel(path): Observable<any> {
    this.urlPath = this.base_Url.concat(path);
    this.appendToken();
      return this.http.get<LabelResponse[]>(this.urlPath, this.httpOptions);
    }

  putService(updatenote, note): Observable<any> {
    this.urlPath = this.base_Url.concat(updatenote);
     this.appendToken();
    return this.http.put<any>(this.urlPath , note, this.httpOptions );
  }

  deleteService(path): Observable<any> {

    this.urlPath = this.base_Url.concat(path);
    return this.http.delete<any>(this.urlPath, this.httpOptions);
  }

  postService(createnote, obj): Observable<any> {
    this.urlPath = this.noteUrl.concat(createnote);
    this.appendToken();
    return this.http.post<any>(this.urlPath, obj, this.httpOptions);
  }

  putService1(path): Observable<any> {

    this.urlPath = this.base_Url.concat(path);
      this.appendToken();
    return this.http.put<any>(this.urlPath, {}, this.httpOptions);
  }

}
