import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube.service';
import {ActivatedRoute,Router, ParamMap} from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

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

  public videolists: any [];
  public errorMsg;
  public selectedID;

  player: YT.Player;
  private id: string = '0eWrpsCLMJQ';
  public video_id;

  constructor(private _youtubeService:YoutubeService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this._youtubeService.getYoutube()
        .subscribe((data)=>{console.log(data);this.videolists=data;});
    
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id=parseInt(params.get('videoId'));
      this.selectedID=id;
    });
  }

  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }
  
}
