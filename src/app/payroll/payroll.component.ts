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
  public startDate: Date;
  public endDate: Date;
  public dateDiff: number;
  public totalDeventions = 0;
  public commonContingencies = this.totalDeventions * 4.70 / 100;
  public unemployement = this.totalDeventions * 1.55 / 100;
  public professionalformation = this.totalDeventions * 0.10 / 100;
  public majorForceHoursDeduction = this.totalDeventions * 2 / 100;
  public otherExtraHoursDeduction = this.totalDeventions * 4.7 / 100;
  public totalAportations = this.commonContingencies + this.unemployement
  + this.professionalformation + this.majorForceHoursDeduction + this.otherExtraHoursDeduction;
  public irpf = 0;
  public irpfDeduction = 0;
  public anticipation = 0;
  public especieSalary = 0;
  public otherDeductions = 0;
  public totalDeductions = 0;
  public indemnization1 =  0;
  public indemnization2 = 0;
  public indemnization3 = 0;
  public totalIndemnizations = 0;
  public complement1 = 0;
  public complement2 = 0;
  public complement3 = 0;
  public majorForceExtraHours = 0;
  public restExtraHours = 0;
  public otherExtraHours = 0;
  public complementaryHours = 0;
  public extraordinaryGratifications = 0;
  SSprestationsOrIndemnizations = 0;
  otherIndemnizations = 0;
  otherSalaryPerceptions = 0;
  nonSalarialPerceptions = 0;
  bruteSalary = 0;
  netSalary =  0;



  @Input() employee: Employee;
  // tslint:disable-next-line: no-input-rename

  @Input() company: Company;

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


  calculateDateDiff(): void{
    const date1 = new Date(this.startDate);
    const  date2 = new Date(this.endDate);
    const time = date2.getTime() - date1.getTime();
    this.dateDiff =  time / (1000 * 3600 * 24); // Difference in Days
  }

  // tslint:disable-next-line: typedef
  public setIrpfDeduction(){
    this.irpfDeduction = this.totalDeventions * this.irpf / 100;
  }

  // tslint:disable-next-line: typedef
  public calculateDeductions(){
    this.totalDeductions = this.totalAportations + this.irpfDeduction + this.anticipation + this.especieSalary
    + this.otherDeductions;
    return this.totalDeductions;

  }


  // tslint:disable-next-line: typedef
  calculateTotalIndemnizations(){
    const total = (this.indemnization1 +  this.indemnization2 + this.indemnization3 + this.otherSalaryPerceptions);
    this.totalIndemnizations = total;
    return total;
  }



  // tslint:disable-next-line: typedef
  calculateTotalDeventions(): number {
    if ( !this.employee ){
      return 0;
    }
    return this.employee?.baseSalary + this.totalComplements() + this.majorForceExtraHours +
     this.otherExtraHours + this.complementaryHours + this.extraordinaryGratifications + this.especieSalary;

  }


  // tslint:disable-next-line: typedef
  calculateTotalNonSalarialPerceptions() {
    return this.calculateTotalIndemnizations() + this.SSprestationsOrIndemnizations +
    this.otherIndemnizations + this.otherSalaryPerceptions;
  }

  // tslint:disable-next-line: typedef
  calculateSalaries(){
    this.bruteSalary =  this.employee?.baseSalary +  this.calculateTotalDeventions() + this.calculateTotalNonSalarialPerceptions();

    this.netSalary =  (this.employee?.baseSalary + this.calculateTotalDeventions() -
     this.calculateDeductions()) + ( this.calculateTotalNonSalarialPerceptions() * this.irpf / 100);
  }

  calculateBruteSalary(): number{
  return this.employee?.baseSalary + this.calculateTotalDeventions() + this.calculateTotalNonSalarialPerceptions();
}

  totalComplements(): number {
    return this.complement1 + this.complement2 + this.complement3;
  }
}
