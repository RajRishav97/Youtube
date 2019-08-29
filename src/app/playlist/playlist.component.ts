import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube.service';
import {ActivatedRoute,Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-playlist',
  templateUrl: 'playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  public videolists: any [];
  public errorMsg;
  public selectedID;
  constructor(private _youtubeService:YoutubeService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this._youtubeService.getYoutube()
        .subscribe((data)=>{console.log(data);this.videolists=data;});
    
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id=parseInt(params.get('id'));
      this.selectedID=id;
    });
  }
  
}
