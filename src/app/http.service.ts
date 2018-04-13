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
    }),
    observe: 'response' as 'response'

  };
  constructor(private http: HttpClient) { }

  // The HTTP Client POST service sends HTTP POST requests to a trading partner's -
  // HTTP server via the perimeter server. This service works with the HTTP Client -
  // Begin service and the HTTP Client End service and through an instance of the HTTP -
  // Client adapter.
postService(url, obj): Observable<any> {
  return this.http.post<any>(url, obj, this.httpOptions);
}







}
