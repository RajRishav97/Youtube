import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube.service';
import {ActivatedRoute,Router, ParamMap} from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { IYoutube } from '../youtube';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
} 
@Component({
  selector: 'app-playlist',
  templateUrl: 'playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  url = "https://www.youtube.com/embed/";

  public videolists=[];
  public errorMsg;
  public selectedID;
  public favouriteData={
    "lists":[]
  };
  public fs;
  constructor(private _youtubeService:YoutubeService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this._youtubeService.getYoutube()
        .subscribe((data)=>{console.log(data.items);this.videolists=(data.items)});

    console.log(this.videolists);
    
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id=params.get('id');
      this.selectedID=id;
     });
     
  }

  
  onSelect(id){
    this.router.navigate(["/video-list",id]);//Normal Routing Navigation
    //console.log(videolist);
    //this.router.navigate([videolist.snippet.resourceId.videoId],{relativeTo:this.route})//Relative Navigation
  }
  addToFavourite(value){
    console.log(value,"from playlist");
    this._youtubeService.addToFavourites(value.snippet).subscribe();
  }
  doSearch(value){
    this._youtubeService.searchYoutube(value)
        .subscribe((data)=>{console.log(data.items);this.videolists=data.items;});
  }
/*
addHero (hero: Hero): Observable<Hero> {
  return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
    .pipe(
      catchError(this.handleError('addHero', hero))
    );
}
*/
  // isSelected(videolist){
  //   return videolist.snippet.resourceId.videoId === this.selectedID;
  // }
  
}
