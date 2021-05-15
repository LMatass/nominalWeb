import { EmployeeService } from '../Services/employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  ejemplo: true;
  public employees: Employee[];
  opened = false;

  // opens-closes sidebar
  toggleSidebar(): void{
    this.opened = !this.opened;
  }


  constructor(private employeeService: EmployeeService){}

  ngOnInit(): void {
    this.employeeService.getEmployees();

  }

}

