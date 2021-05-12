import { SearchBarComponent } from './../search-bar/search-bar.component';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Employee } from '../employees/models/employee';
import { EmployeeService } from '../employees/employee.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.css']
})
export class PayrollComponent implements OnInit {

  /**
   * Company
   */

  companyName: string;
  companyAdress: string;
  city: string;

  /**
   * Employee
   */
  employeeName: string;
  NIF: string;
  NAF: string;
  retributiveGroup: string;
  establishmentCategory: number;

  /**
   * Liquidation period
   */
  baseSalary: number;
  complementsNames: [];
  complementsImports: [];
  majorForceExtraHours: number;
  restExtraHours: number;
  complementaryHours: number;
  extraordinaryGratifications: number;
  especieSalary: number;

  // non salarial
  indemnitzationNames: [];
  indemnitzationImports: [];
  SSprestationsOrIndemnitzations: number;
  otherIndemnitzations: number;
  otherSalaryPerceptions: number;

  /**
   * Dedductions
   */
  // % dedductions
  commonContingencies: number;
  unemployement: number;
  professionalFormation: number;
  majorForceExtraHoursDeductions: number;
  otherExtraHoursDeductions: number;

  // non %
  totalAportations: number;
  anticipations: number;
  especieProductsValue: number;
  otherDeductions: number;
  totalDeductions: number;

  // neto
  netSalary: number;




  public keyword = 'name';
  public data: Observable<Employee[]>;
  public keywords = ['name', 'dni' , 'id'];
  public startDate: Date;
  public endDate: Date;
  public dateDiff: number;

  @Input() employee: Employee;
  // tslint:disable-next-line: no-input-rename

  constructor(private employeeService: EmployeeService) {

  }
  public selectEvent(employee: Employee): void{
    console.log(employee);
  }

  // Gets all employees from service
  ngOnInit(): void {
    this.getEmployees();
  }

  receiveEmployee($event): void {

    this.employee = $event;

  }

  getEmployees(): void{
    this.data = this.employeeService.getEmployees();
  }


  calculateDateDiff(): void{
    const date1 = new Date(this.startDate);
    const  date2 = new Date(this.endDate);
    const time = date2.getTime() - date1.getTime();
    this.dateDiff =  time / (1000 * 3600 * 24); // Difference in Days
  }


}
