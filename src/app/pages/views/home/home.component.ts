import { HomeService } from './../../../services/home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  barcode:string = '';
  constructor(private homeService:HomeService) {

  }

  ngOnInit(): void {
    
  }
  onEnterPress($event:any){
    let barcode = this.barcode;
    console.log(barcode);
  }
}
