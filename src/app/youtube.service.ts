import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from  '@angular/common/http';

import { throwError as observableThrowError, Observable} from 'rxjs';
import { catchError  } from 'rxjs/operators';
import { IYoutube } from './youtube';
@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private _url: string ="http://localhost:3100/items";
  constructor(private http:HttpClient) { }

  getYoutube(): Observable<[IYoutube]>{
    return this.http.get<[IYoutube]>(this._url);
  }

}
