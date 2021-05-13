import { Router } from '@angular/router';
import { EmployeeService } from './Services/employee.service';
import { EmployeesComponent } from './employees/employees.component';
import { HttpErrorResponse } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Employee } from './models/employee';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'nominal';
  public employees: Employee[];
  private router: Router;


  constructor(private employeeService: EmployeeService){}

  ngOnInit() {

    this.employeeService.getEmployees();

  }

}
