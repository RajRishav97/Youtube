import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from  '@angular/common/http';

import { throwError as observableThrowError, Observable} from 'rxjs';
import { catchError  } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private _url: string ="/assets/data/yt_data.json"
  constructor(private http:HttpClient) { }

}
