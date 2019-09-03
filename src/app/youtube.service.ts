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
  private _url: string ="https://www.googleapis.com/youtube/v3/search?key=[Your API Key]&channelId=UC80PWRj_ZU8Zu0HSMNVwKWw&part=snippet,id&order=date&maxResults=50";

  private url_entertainment: string="https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=entertainment&key=[Your API Key]";

  private url_news: string="https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=news&key=[Your API Key]";

  private url_music: string="https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=music&key=[Your API Key]";

  private url_sports: string="https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=sports&key=[Your API Key]";
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
    return this.http.get<any>("http://localhost:3000/items");//Your Database for favourites
  }
  searchYoutube(value):Observable<any>{
    this._url="https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="+value+"&key=[Your API Key]";
    return this.http.get<any>(this._url);
  }
  addToFavourites(values):Observable<Id>{
    console.log(values, "????")
    return this.http.post<Id>("http://localhost:3000/items",values);
  }
  getRemoved(val){
    return this.http.delete("http://localhost:3000/items/"+val);
    window.location.reload();
  }
  addCommenttoFav(comment,id){
    console.log(id);
    return this.http.patch("http://localhost:3000/items/"+id,{"Comment":comment});
  }
}
