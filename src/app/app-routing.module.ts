import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistComponent } from './playlist/playlist.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import {StartPageComponent} from '../app/start-page/start-page.component'


const routes: Routes = [
  {path:'',redirectTo:'/start-page',pathMatch:'full'},
  {path:'start-page',component:StartPageComponent},
  {path: 'video-list', component:PlaylistComponent },
  {path: 'video-list/:id', component:YoutubePlayerComponent},
  //{path: "**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [PlaylistComponent,YoutubePlayerComponent];