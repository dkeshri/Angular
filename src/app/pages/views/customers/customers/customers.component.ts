import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
interface City {
  name: string,
  code: string
}
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  faCoffee = faCoffee;
  public cities: City[] = [];
  selectedCityCode:string = 'LDN';
    constructor() {
  
      this.cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
      ];
      this.selectedCityCode = 'RM';
    }

  ngOnInit(): void {
  }

}
