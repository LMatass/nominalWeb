import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';
import { EmployeeService } from '../Services/employee.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-employees-search-bar',
  templateUrl: './employees-search-bar.component.html',
  styleUrls: ['./employees-search-bar.component.css']
})
export class EmployeesSearchBarComponent implements OnInit {
  public keyword = 'name';
  public data: Observable<Employee[]>;
  public keywords = ['name', 'dni'];

  @Output() employeeEvent = new EventEmitter<Employee>();


  employee: Employee;
  constructor(private employeeService: EmployeeService, public datepipe: DatePipe) {

  }


  // emits the selected employee to the payroll parent component
  public selectEvent(employee){
    employee.hireDate = this.datepipe.transform(employee.hireDate, 'dd-MM-yyyy');
    this.employeeEvent.emit(employee);
  }

  // Gets all employees from service
  ngOnInit(): void {
    this.getEmployees();
  }


  getEmployees(): void{
    this.data = this.employeeService.getEmployees();
  }
}
