import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from  '@angular/common/http';

import { throwError, Observable} from 'rxjs';
import { catchError  } from 'rxjs/operators';
import { IYoutube, Id,data } from './youtube';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class YoutubeService {
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  private _url: string ="https://www.googleapis.com/youtube/v3/search?key=AIzaSyCKHJNRbm5fKu1vcUtPhaUWhlzjGNkqN68&channelId=UC80PWRj_ZU8Zu0HSMNVwKWw&part=snippet,id&order=date&maxResults=50";

  private url_entertainment: string="https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=entertainment&key=AIzaSyCKHJNRbm5fKu1vcUtPhaUWhlzjGNkqN68";

  private url_news: string="https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=news&key=AIzaSyCKHJNRbm5fKu1vcUtPhaUWhlzjGNkqN68";

  private url_music: string="https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=music&key=AIzaSyCKHJNRbm5fKu1vcUtPhaUWhlzjGNkqN68";

  private url_sports: string="https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=sports&key=AIzaSyCKHJNRbm5fKu1vcUtPhaUWhlzjGNkqN68";

  public json_url:string="http://localhost:3000/items";
  constructor(private http:HttpClient) { }


  getYoutube(): Observable<any>{
    return this.http.get<any>(this._url);
  }
  getNews(): Observable<any>{
    this._url=this.url_news;
    return this.http.get<any>(this._url);
  }
  getEntertainment():Observable<any>{
    this._url=this.url_entertainment;
    return this.http.get<any>(this._url);
  }
  getMusic():Observable<any>{
    this._url=this.url_music;
    return this.http.get<any>(this._url);
  }
  getSports():Observable<any>{
    this._url=this.url_sports;
    return this.http.get<any>(this._url);
  }
  getFavourites():Observable<any>{
    return this.http.get<any>(this.json_url);
  }
  searchYoutube(value):Observable<any>{
    this._url="https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="+value+"&key=AIzaSyCKHJNRbm5fKu1vcUtPhaUWhlzjGNkqN68";
    return this.http.get<any>(this._url);
  }
  addToFavourites(values):Observable<Id>{
    console.log(values, "????")
    return this.http.post<Id>("http://localhost:3000/items",values)
  }
}
