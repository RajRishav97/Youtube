import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube.service';
@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  title = 'Youtube';
  public Mydata:any [];
  public data1="My_name_is_angular.";
  constructor(private _youtubeService:YoutubeService){}

  ngOnInit() {
    this._youtubeService.getYoutube()
        .subscribe((data)=>{console.log(data);this.Mydata=data.items;});
  }
  
  doSearch(value){
    this._youtubeService.searchYoutube(value)
        .subscribe((data)=>{console.log(data.items);this.Mydata=data.items;});
  }

}
