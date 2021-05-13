import { EmployeesSearchBarComponent } from '../employees-search-bar/employees-search-bar.component';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Employee } from '../models/employee';
import { EmployeeService } from '../Services/employee.service';
import { Observable } from 'rxjs';
import { Company } from '../models/company';
import { Payroll } from '../models/payroll';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.css']
})
export class PayrollComponent implements OnInit {



  public keyword = 'name';
  public data: Observable<Employee[]>;
  public keywords = ['name', 'dni' , 'id'];



  @Input() employee: Employee;
  // tslint:disable-next-line: no-input-rename

  @Input() company: Company;

  public payroll: Payroll;

  constructor(private employeeService: EmployeeService) {

  }


  // Gets all employees from service
  ngOnInit(): void {
    this.getEmployees();
  }

  receiveEmployee($event): void {

    this.employee = $event;

  }

  receiveCompany($event): void {
    this.company = $event;
  }

  getEmployees(): void{
    this.data = this.employeeService.getEmployees();
  }


  calculateDateDiff(): number{
    const date1 = new Date(this.payroll.startDate);
    const  date2 = new Date(this.payroll.endDate);
    const time = date2.getTime() - date1.getTime();
    this.payroll.dateDiff =  time / (1000 * 3600 * 24); // Difference in Days
    return this.payroll.dateDiff;
  }

  // tslint:disable-next-line: typedef
  public setIrpfDeduction(): void{
    this.payroll.irpfDeduction = this.payroll.netSalary * this.payroll.irpfPercent / 100;
  }

  public calculateIrpfDeduction(): number{
    this.setIrpfDeduction();
    return this.payroll.irpfDeduction;
  }
  public calculateTotalAportations(): number{
    this.payroll.totalAportations = this.payroll.commonContingenciesDeduction + this.payroll.unemployementDeduction +
    this.payroll.professionalFormationDeduction + this.payroll.majorForceExtraHoursDeduction + this.payroll.otherExtraHoursDeduction;
    return this.payroll.totalAportations;
  }

  // tslint:disable-next-line: typedef
  public calculateTotalDeductions(){
    this.payroll.totalDeductions = this.calculateTotalAportations() + this.calculateIrpfDeduction() +
    this.payroll.anticipations + this.payroll.especieSalaryImport  + this.payroll.otherDeductions;
    return this.payroll.totalDeductions;

  }


  // tslint:disable-next-line: typedef
  calculateTotalIndemnizations(): number{
    return (this.payroll.indemnization1Import +  this.payroll.indemnization2Import + this.payroll.indemnization3Import + this.payroll.otherSalaryPerceptions);
  }



  // tslint:disable-next-line: typedef
  calculateTotalDeventions(): number {
    if ( !this.employee ){
      return 0;
    }
    
    this.payroll.totalDeventions = this.employee?.baseSalary + this.totalComplements() +
     this.payroll.majorForceExtraHoursImport +this.payroll.otherExtraHoursImport +
     this.payroll.complementaryHoursImport + this.payroll.extraordinaryGratificationsImport
     this.payroll.especieSalaryImport + this.calculateTotalNonSalarialPerceptions();

     return this.payroll.totalDeventions

  }


  // tslint:disable-next-line: typedef
  calculateTotalNonSalarialPerceptions() {
    return this.calculateTotalIndemnizations() + this.payroll.SSprestationsOrIndemnizations +
    this.payroll.otherIndemnizations + this.payroll.otherSalaryPerceptions;


  }

  calculateBruteSalary(){
   return this.calculateTotalDeventions();
   
  }

  // tslint:disable-next-line: typedef
  calculateSalaries(){

    this.payroll.bruteSalary = this.calculateBruteSalary();

    this.payroll.netSalary =  this.calculateBruteSalary() - this.calculateIrpfDeduction();
  }


  getNetSalary(){
    return this.payroll.netSalary;
  }

  totalComplements(): number {
    return this.payroll.complement1Import + this.payroll.complement2Import + this.payroll.complement3Import;
  }
}
