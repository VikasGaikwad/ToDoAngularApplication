import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Headers } from '@angular/http/src/headers';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { NoteResponse } from './noteResponse';
import { LabelResponse } from './labelResponse';
import { ImageResponse } from './imageResponse';
import { environment } from '../environments/environment';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class HttpService {
    private allLabelSubject = new Subject<any>();
  // search
    private searchSubjcet = new Subject<any>();
    searchObservable$ = this.searchSubjcet.asObservable();

    urlPath: string;
    httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    observe: 'response' as 'response'
  };

  // -------------------------------------------------------------------
  constructor(private http: HttpClient, ) {
  }
  // -------------------------------------------------------------------

  appendToken(): void {
    console.log(localStorage.getItem('Authorization'));

    if (localStorage.getItem('Authorization')) {
        this.httpOptions.headers = this.httpOptions.headers.set('Authorization', localStorage.getItem('Authorization'));
    }
  }

  // -------------------------------------------------------------------

  loadAll(path): void {
    this.urlPath = environment.noteUrl.concat(path);
    this.appendToken();
    this.http.get<any>(this.urlPath, this.httpOptions).toPromise().then((res) => {
      this.allLabelSubject.next(res);
    });
  }

  getAll(path): any {
    this.loadAll(path);
    return this.allLabelSubject.asObservable();
  }

  getService(path): Observable<any> {
    this.urlPath = environment.base_Url.concat(path);
    this.appendToken();
    return this.http.get<any>(this.urlPath, this.httpOptions);
  }
  // -------------------------------------------------------------------

  // getServiceLabel(path): Observable<any> {
  //   this.urlPath = environment.noteUrl.concat(path);
  //   this.appendToken();
  //   return this.http.get<LabelResponse[]>(this.urlPath, this.httpOptions);
  // }
  // -------------------------------------------------------------------

  putService(path, note?): Observable<any> {
    this.urlPath = environment.noteUrl.concat(path);
    this.appendToken();
    return this.http.put<any>(this.urlPath, note, this.httpOptions);
  }

  // -------------------------------------------------------------------


  deleteService(path): Observable<any> {
    this.urlPath = environment.base_Url.concat(path);
    this.appendToken();
    return this.http.delete<any>(this.urlPath, this.httpOptions);
  }
  // -------------------------------------------------------------------

  postService(path, obj): Observable<any> {

    this.urlPath = environment.base_Url.concat(path);
    return this.http.post<any>(this.urlPath, obj, this.httpOptions);

  }
  // -------------------------------------------------------------------

  // putService1(path): Observable<any> {

  //   this.urlPath = environment.noteUrl.concat(path);
  //   this.appendToken();
  //   return this.http.put<any>(this.urlPath, {}, this.httpOptions);
  // }
  // -------------------------------------------------------------------

  // putImageService(path, images): Observable<any> {
  //   this.urlPath = this.base_Url.concat(path);
  //   this.appendToken();
  //   return this.http.post<any>(this.urlPath, images, this.httpOptions);
  // }
  // -------------------------------------------------------------------

  postImageService(path, file, noteId): Observable<any> {
    this.urlPath = environment.noteUrl.concat(path);
    this.appendToken();
    const formdata: FormData = new FormData();
    const x = file[0];
    formdata.append('file', x);
    formdata.append('noteId', noteId);

    const httpOptions2 = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('Authorization')
      }),
      observe: 'response' as 'response'
    };

    return this.http.post<any>(this.urlPath, formdata, httpOptions2);
  }
  deleteImageService(path, noteId): Observable<any> {
    this.urlPath = environment.noteUrl.concat(path);
    return this.http.delete<any>(this.urlPath, this.httpOptions);
  }
  onDataChangeInSearch(data: any) {
    console.log(data);
    this.searchSubjcet.next(data);
  }
}
