import { ThemeModule } from './../theme/theme.module';
import { NgModule } from '@angular/core';
import { VideoComponent } from './components/video/video.component';
import { YouTubePlayerModule } from '@angular/youtube-player';


@NgModule({
  declarations: [
    VideoComponent
  ],
  imports: [
    ThemeModule,
    YouTubePlayerModule
  ],
  exports:[
    VideoComponent,
    ThemeModule
  ]
})
export class SharedModule { }
