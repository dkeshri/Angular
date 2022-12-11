import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  videoPlayerHeight:number = 200;
  videoPlayerWidth:number = 400;
  videoStartSec:number = 4;
  videoEndSec:number = 8;
  videoId:string = "uUyWTjY0svw";
  //https://www.youtube.com/watch?v=uUyWTjY0svw
  constructor() { }

  ngOnInit(): void {
  }

}
