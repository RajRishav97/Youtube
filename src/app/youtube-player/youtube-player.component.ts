import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube-player',
  template: `
  <youtube-player
  [videoId]="id"
  (ready)="savePlayer($event)"
  (change)="onStateChange($event)">
  </youtube-player>
  `,
  styles: []
})
export class YoutubePlayerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  player: YT.Player;
  private id: string = 'qDuKsiwS5xw';

  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }

}
