import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router, ParamMap} from '@angular/router';
import { YoutubeService } from '../youtube.service';

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { switchMap } from 'rxjs/operators';

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

  constructor(private _youtubeService:YoutubeService,private route:ActivatedRoute,private router:Router) { }

  
  public video_id="0eWrpsCLMJQ";
  public videolists=[];
  public Comments=[];

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      console.log(params);
      let id=params.get('id');
      if(id !== null){
      console.log(id);
      this.video_id=id;
      }
    });
  }

  doComment(value){
    this.Comments.push(value);
    console.log(this.Comments);
  }
  doSearch(value){
    this._youtubeService.searchYoutube(value)
        .subscribe((data)=>{console.log(data.items);this.videolists=data.items;});
  }

  /*public departmentID;

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    //let id=parseInt(this.route.snapshot.paramMap.get('id'));
    //this.departmentID=id;

    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id=parseInt(params.get('id'));
      this.departmentID=id;
    });
  }

  MovePrivious(){
    let previousID=this.departmentID-1;
    //this.router.navigate(['/departments',previousID]);//Routing navigation
    this.router.navigate(['../',previousID],{relativeTo:this.route});
  }

  MoveNext(){
    let nextID=this.departmentID+1;
    //this.router.navigate(['/departments',nextID]);//Routing navigation
    this.router.navigate(['../',nextID],{relativeTo:this.route});
  }

  gotoDepartments(){
    let selectID=this.departmentID?this.departmentID:null;
    //this.router.navigate(['/departments',{id:selectID,test:'testValue'}]);//Routing Navigation
    this.router.navigate(['../',{id:selectID}],{relativeTo:this.route});//Relative Navigation
  }

  showOverview(){
    this.router.navigate(['overview'],{relativeTo:this.route});
  }

  showContact(){
    this.router.navigate(['contact'],{relativeTo:this.route});
  }*/


}
