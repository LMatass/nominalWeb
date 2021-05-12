import { Component, OnInit } from '@angular/core';
import { Employee } from '../employees/models/employee';
import { EmployeeService } from '../employees/employee.service';

@Component({
  selector: 'app-employees-page',
  templateUrl: './employees-page.component.html',
  styleUrls: ['./employees-page.component.css']
})
export class EmployeesPageComponent implements OnInit {
  public employees: Employee[];

  constructor(private employeeService: EmployeeService){}

  ngOnInit() {
    this.employeeService.getEmployees();

  }

}
