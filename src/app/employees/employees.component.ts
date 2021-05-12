import { EmployeeService } from './employee.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from './models/employee';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  public employees: Employee[];
  public editEmployee: Employee;
  public deleteEmployee: Employee;

    constructor(private employeeService: EmployeeService) { }

    ngOnInit() {
      this.getEmployees();
    }

    // calls employee get all employees service
  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
      },

      (error: HttpErrorResponse) => {
        alert(error.message);
      }

    );


}

public OnPayrollModal(): void {

}
}
