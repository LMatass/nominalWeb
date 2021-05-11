import { EmployeeService } from './employees/employee.service';
import { EmployeesComponent } from './employees/employees.component';
import { HttpErrorResponse } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Employee } from './employees/employee';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'nominal';
  public employees: Employee[];


  constructor(private employeeService: EmployeeService){}

  ngOnInit() {
    this.employeeService.getEmployees();
  }

}
