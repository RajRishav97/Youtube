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

  // isSelected(videolist){
  //   return videolist.snippet.resourceId.videoId === this.selectedID;
  // }
  
}
