import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public name="Rishav";
  public favourite=[];

  constructor(private _youtubeService:YoutubeService) { }

  ngOnInit() {
    this._youtubeService.getFavourites()
        .subscribe((data)=>{console.log(data);this.favourite=(data)});
  }

}
