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
  public Entertainment:any [];
  public News: any[];
  public Music: any[];
  public Sports: any[];
  public data1="My_name_is_angular.";
  constructor(private _youtubeService:YoutubeService){}

  ngOnInit() {
    this._youtubeService.getYoutube()
        .subscribe((data)=>{console.log(data);this.Mydata=data.items;});

    this.goToEntertainment();
    this.goToMusic();
    this.goToNews();
    this.goToSports();
  }

  goToEntertainment(){
    this._youtubeService.getEntertainment()
        .subscribe((data)=>{console.log(data);this.Entertainment=data.items;});
  }

  goToNews(){
    this._youtubeService.getNews()
        .subscribe((data)=>{console.log(data);this.News=data.items;});
  }

  goToMusic(){
    this._youtubeService.getMusic()
        .subscribe((data)=>{console.log(data);this.Music=data.items;});
  }
  goToSports(){
    this._youtubeService.getSports()
        .subscribe((data)=>{console.log(data);this.Sports=data.items;});
  }
  
  doSearch(value){
    this._youtubeService.searchYoutube(value)
        .subscribe((data)=>{console.log(data.items);this.Mydata=data.items;});
  }

}
