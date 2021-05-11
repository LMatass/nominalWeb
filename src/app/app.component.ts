import { EmployeeService } from './employees/employee.service';
import { EmployeesComponent } from './employees/employees.component';
import { HttpErrorResponse } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Employee } from './employees/employee';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'nominal';
  public employees: Employee[];


  constructor(private employeeService: EmployeeService, private router: Router){}

  ngOnInit() {

    this.router.navigate(['home'])
    this.employeeService.getEmployees();
  }

}
