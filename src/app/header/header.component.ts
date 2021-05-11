import { EmployeeService } from './../employees/employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from './../employees/employee';
import { Observable } from 'rxjs';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [EmployeeService]
})
export class HeaderComponent implements OnInit {
  public keyword = 'name';
  public data: Observable<Employee[]>;
  public keywords = ['name', 'dni' , 'id'];

  constructor(private employeeService: EmployeeService) {

  }

  ngOnInit(): void {
    this.getEmployees();
  }


  getEmployees(): void{
    this.data = this.employeeService.getEmployees();
  }
}
