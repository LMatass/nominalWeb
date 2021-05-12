import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employees/models/employee';
import { EmployeeService } from './../employees/employee.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  public keyword = 'name';
  public data: Observable<Employee[]>;
  public keywords = ['name', 'dni' , 'id'];

  @Input() employee: Employee;
  // tslint:disable-next-line: no-input-rename
  @Input('master') masterName: string;

  constructor(private employeeService: EmployeeService) {

  }
  public selectEvent(employee){
    console.log(employee);
  }

  //Gets all employees from service
  ngOnInit(): void {
    this.getEmployees();
  }


  getEmployees(): void{
    this.data = this.employeeService.getEmployees();
  }
}
