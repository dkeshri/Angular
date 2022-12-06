import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-deepak',
  templateUrl: './deepak.component.html',
  styleUrls: ['./deepak.component.css']
})
export class DeepakComponent implements OnInit {

  @Output()
  deepakButtonClick = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  onButtonClick():void{
    this.deepakButtonClick.emit('deepakCompenent');
  }

}
