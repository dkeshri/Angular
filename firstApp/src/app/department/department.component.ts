import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
ActivatedRoute
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  public departmentId: any;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //let id = this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id = params.get('id');
      this.departmentId = id;
    });
  }
  goPrevious() {
    let previousId = this.departmentId + 1;
    this.router.navigate(['/departments', previousId]);
  }
  goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }
}
