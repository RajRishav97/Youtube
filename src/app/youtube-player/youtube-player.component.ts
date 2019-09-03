import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import {ActivatedRoute,Router, ParamMap} from '@angular/router';
import { YoutubeService } from '../youtube.service';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common'; 

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { switchMap } from 'rxjs/operators';
import { rendererTypeName } from '@angular/compiler';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
} 

@Component({
  selector: 'app-youtube-player',
  templateUrl: 'youtube-player.component.html',
  styles: []
})
export class YoutubePlayerComponent implements OnInit {

  url = "https://www.youtube.com/embed/";

  @ViewChild('myDiv',{ static: false }) myDiv: ElementRef;

  constructor(private _youtubeService:YoutubeService,private route:ActivatedRoute,private router:Router,private renderer:Renderer2) { }

  
  public video_id="0eWrpsCLMJQ";
  public videolists=[];
  public Comments=[];
  public li=this.renderer.createComment('h5');

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      console.log(params);
      let id=params.get('id');
      if(id !== null){
      console.log(id);
      this.video_id=id;
      }
    });
    this._youtubeService.getYoutube()
        .subscribe((data)=>{console.log(data.items);this.videolists=(data.items)});
  }

  doComment(value){
    this.Comments.push(value);
    console.log(this.Comments);
    this.li.innerHTML="Commented";
    this.renderer.appendChild(this.myDiv.nativeElement,this.li);

  }
  doSearch(value){
    this._youtubeService.searchYoutube(value)
        .subscribe((data)=>{console.log(data.items);this.videolists=data.items;});
  }

  

}
