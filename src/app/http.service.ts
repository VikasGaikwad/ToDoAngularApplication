import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
//  The @Injectable() decorator tells Angular that this service
//  might itself have injected dependencies.
@Injectable()
export class HttpService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'auth': localStorage.getItem('auth')
    })
  };
  constructor(private http: HttpClient) { }
postService(url, obj): Observable<any> {
  return this.http.post<any>(url, obj, { observe: 'response'});
}
}
