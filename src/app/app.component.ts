import { Component } from '@angular/core';
import { YoutubeService } from './youtube.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Youtube';
  public Mydata:any [];
  public data1="My_name_is_angular.";
  constructor(private _youtubeService:YoutubeService){}

  ngOnInit() {
    this._youtubeService.getYoutube()
        .subscribe((data)=>{console.log(data);this.Mydata=data;});
  }
  
  doSearch(value){
    console.log(this.data1.includes(value));
  }
}
