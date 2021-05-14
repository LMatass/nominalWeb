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


  constructor() {
    this.payroll = new Payroll();
  }

  // Gets all employees from service
  ngOnInit(): void {
  }

  // receives an employee from the search bar event
  receiveEmployee($event): void {
    this.employee = $event;
  }

  // receives a company from the search bar event
  receiveCompany($event): void {
    this.company = $event;
  }



  setDateDiff(): void{
    const date1 = new Date(this.payroll.startDate);
    const  date2 = new Date(this.payroll.endDate);
    const time = date2.getTime() - date1.getTime();
    this.payroll.dateDiff =  time / (1000 * 3600 * 24); // Difference in Days
  }
  getDateDiff(): number{
    return this.payroll.dateDiff;
  }

  public getBaseSalary(): number{
    return this.employee.baseSalary;
  }

/**
 * Deventions
 */

public getTotalComplements(): number{
  return this.payroll.complement1Import + this.payroll.complement2Import + this.payroll.complement3Import;
}
  calculateTotalDeventions(): number {


    if (!this.employee){
      return  0;
    }
    else{
    return  this.employee.baseSalary + this.getTotalComplements() +
     this.payroll.majorForceExtraHoursImport + this.payroll.otherExtraHoursImport +
     this.payroll.complementaryHoursImport + this.payroll.extraordinaryGratificationsImport +
    this.payroll.especieSalaryImport + this.calculateTotalNonSalarialPerceptions();
    }
  }



  /**
   * Deductions
   */

  public getIrpfDeduction(): number{
    return this.calculateTotalDeventions() * this.getIrpfPercent() / 100;
  }


  public getTotalAportations(): number{

    this.payroll.unemployementDeduction = (this.payroll.unemployementPercent / 100) * this.calculateTotalDeventions();
    this.payroll.professionalFormationDeduction = (this.payroll.professionalFormationPercent / 100) * this.calculateTotalDeventions();
    this.payroll.majorForceExtraHoursDeduction = (this.payroll.majorForceExtraHoursPercent / 100) * this.calculateTotalDeventions();
    this.payroll.otherExtraHoursDeduction = (this.payroll.otherExtraHoursPercent / 100) * this.calculateTotalDeventions();

    this.payroll.totalAportations = this.getCommonContingenciesDeduction() + this.payroll.unemployementDeduction +
    this.payroll.professionalFormationDeduction + this.payroll.majorForceExtraHoursDeduction + this.payroll.otherExtraHoursDeduction;

    return this.payroll.totalAportations;
  }


  public getCommonContingenciesDeduction(): number{
    return (this.payroll.commonContingenciesPercent / 100) * this.calculateTotalDeventions();
  }

  public getUnemployementDeduction(): number{
    return this.payroll.unemployementPercent/100 * this.calculateTotalDeventions();
  }
  public getProfessionalFormationDeduction(): number{
    return (this.payroll.professionalFormationPercent / 100) * this.calculateTotalDeventions();
  }
  public getMajorForceExtraHoursDeduction(): number{
    return (this.payroll.majorForceExtraHoursPercent / 100) *  this.calculateTotalDeventions();
  }
  public getOtherExtraHoursDeduction(): number{
    return (this.payroll.otherExtraHoursPercent / 100) *  this.calculateTotalDeventions();
  }


  public getTotalDeductions(): number{
    if (!this.employee){
      return  0;
    }

    return  this.getTotalAportations() + this.payroll.irpfDeduction +
    this.payroll.anticipations + this.payroll.especieProductsValue  + this.payroll.otherDeductions +
    this.employee?.baseSalary * this.payroll.irpfPercent / 100;

  }


  getTotalIndemnizations(): number{
    return (this.payroll.indemnization1Import +  this.payroll.indemnization2Import +
      this.payroll.indemnization3Import);
  }




  calculateTotalNonSalarialPerceptions(): number {
   return  this.payroll.totalDeventions + this.getTotalIndemnizations() + this.payroll.SSprestationsOrIndemnizations +
    this.payroll.otherIndemnizations + this.payroll.otherSalaryPerceptions;

  }


  public getNetSalary(): number{


    return  this.calculateTotalDeventions() - this.getTotalDeductions();

  }

  public getIrpfPercent(): number{
    return this.payroll.irpfPercent;
  }


}

