import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
Router
@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  public departments = [
    {id:1,name:'Angular'},
    {id:2,name:'Node'},
    {id:3,name:'React'},
    {id:4,name:'.Net Core'},
    {id:5,name:'Python'}
  ]
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSelect(department:any){
    this.router.navigate(['/departments',department.id])
  }
}
