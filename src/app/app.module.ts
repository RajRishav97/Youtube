import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxYoutubePlayerModule} from 'ngx-youtube-player';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { HttpClientModule } from '@angular/common/http';
import { YoutubeService } from './youtube.service';
import { PlaylistComponent, SafePipe } from './playlist/playlist.component';
import { StartPageComponent } from './start-page/start-page.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    YoutubePlayerComponent,
    PlaylistComponent,
    SafePipe,
    StartPageComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxYoutubePlayerModule,
    HttpClientModule
  ],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
//platformBrowserDynamic().bootstrapModule(AppModule);
