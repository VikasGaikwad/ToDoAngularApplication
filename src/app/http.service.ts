import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
//  The @Injectable() decorator tells Angular that this service
//  might itself have injected dependencies.
@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }
postService(url, obj): Observable<any> {
  return this.http.post<any>(url, obj, { observe: 'response'});
}
}
