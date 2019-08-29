import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaylistComponent } from './playlist/playlist.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';


const routes: Routes = [
  {path:'',redirectTo:'/video-list',pathMatch:'full'},
  {path: 'video-list', component:PlaylistComponent },
  {path: 'video', component:YoutubePlayerComponent},
  //{path: "**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
