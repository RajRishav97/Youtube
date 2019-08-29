import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from  '@angular/common/http';

import { throwError as observableThrowError, Observable} from 'rxjs';
import { catchError  } from 'rxjs/operators';
import { IYoutube } from './youtube';
@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private _url: string ="https://www.googleapis.com/youtube/v3/search?key=AIzaSyDM9OocxY2-PJVrJRyvEdnqyQNsq3ezHzo&channelId=UC80PWRj_ZU8Zu0HSMNVwKWw&part=snippet,id&order=date&maxResults=50";
  constructor(private http:HttpClient) { }

  getYoutube(): Observable<any>{
    return this.http.get<any>(this._url);
  }

  searchYoutube(value):Observable<any>{
    this._url="https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="+value+"&key=AIzaSyDM9OocxY2-PJVrJRyvEdnqyQNsq3ezHzo";
    return this.http.get<any>(this._url);
  }

  

}
