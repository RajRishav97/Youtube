import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-youtube-player',
  templateUrl: 'youtube-player.component.html',
  styles: []
})
export class YoutubePlayerComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }

  player: YT.Player;
  private id: string = '0eWrpsCLMJQ';
  public video_id;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id=parseInt(params.get('videoId'));
      this.video_id=id;
    });
  }

  

  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
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
