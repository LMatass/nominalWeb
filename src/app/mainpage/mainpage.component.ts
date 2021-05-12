import { EmployeeService } from './../employees/employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employees/models/employee';
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
  toggleSidebar(){
    this.opened = !this.opened;
  }


  constructor(private employeeService: EmployeeService){}

  ngOnInit() {
    this.employeeService.getEmployees();

  }

}

