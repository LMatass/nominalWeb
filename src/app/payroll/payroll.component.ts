import { EmployeesSearchBarComponent } from '../employees-search-bar/employees-search-bar.component';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Employee } from '../models/employee';
import { EmployeeService } from '../Services/employee.service';
import { Observable } from 'rxjs';
import { Company } from '../models/company';
import { Payroll } from '../models/payroll';
import { PayrollService } from '../Services/payroll.service';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.css']
})
export class PayrollComponent implements OnInit {




  public keyword = 'name';
  public data: Observable<Employee[]>;
  public keywords = ['name', 'dni' , 'id'];
  public generatedReportId: number;
  public added = false;
  public dateAdded = false;
  public successMessage = '';
  public exportPath: string;



  @Input() employee: Employee;
  // tslint:disable-next-line: no-input-rename

  @Input() company: Company;


  public payroll: Payroll;


  constructor(private payrollService: PayrollService) {
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


// sets the date difference in days given the template selected dates
  setDateDiff(): void{
    this.dateAdded = true;
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

  getTotalIndemnizations(): number{
    return (this.payroll.indemnization1Import +  this.payroll.indemnization2Import +
      this.payroll.indemnization3Import);
  }




  calculateTotalNonSalarialPerceptions(): number {
   return  this.payroll.totalDeventions + this.getTotalIndemnizations() + this.payroll.SSprestationsOrIndemnizations +
    this.payroll.otherIndemnizations + this.payroll.otherSalaryPerceptions;

  }


  /**
   * Deductions
   */

  public getIrpfDeduction(): number{
    return this.calculateTotalDeventions() * this.getIrpfPercent() / 100;
  }

  // sums all the ss aportations given all the deductions, which are the percentage per the total deventions
  public getTotalAportations(): number{

    this.payroll.unemployementDeduction =
     parseFloat(((this.payroll.unemployementPercent / 100) * this.calculateTotalDeventions()).toFixed(2));
    this.payroll.professionalFormationDeduction =
     parseFloat(((this.payroll.professionalFormationPercent / 100) * this.calculateTotalDeventions()).toFixed(2));
    this.payroll.majorForceExtraHoursDeduction =
     parseFloat(((this.payroll.majorForceExtraHoursPercent / 100) * this.calculateTotalDeventions()).toFixed(2));
    this.payroll.otherExtraHoursDeduction =
     parseFloat(((this.payroll.otherExtraHoursPercent / 100) * this.calculateTotalDeventions()).toFixed(2));

    this.payroll.totalAportations = this.getCommonContingenciesDeduction() + this.payroll.unemployementDeduction +
    this.payroll.professionalFormationDeduction + this.payroll.majorForceExtraHoursDeduction + this.payroll.otherExtraHoursDeduction;

    return parseFloat(this.payroll.totalAportations.toFixed(2));
  }


  public getCommonContingenciesDeduction(): number{
    return (this.payroll.commonContingenciesPercent / 100) * this.calculateTotalDeventions();
  }

  public getUnemployementDeduction(): number{
    return this.payroll.unemployementPercent / 100 * this.calculateTotalDeventions();
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



  public getNetSalary(): number{
    return  this.calculateTotalDeventions() - this.getTotalDeductions();
  }

  public getIrpfPercent(): number{
    return this.payroll.irpfPercent;
  }

  // sets the payroll object then calls the service add method to further insert it to the database
  public calculatePayroll(): void{
    this.payroll.companyId = this.company?.id;
    this.payroll.companyName = this.company.name;
    this.payroll.companyAddress = this.company.address;
    this.payroll.totalAportations = parseFloat(this.getTotalAportations().toFixed(2));
    this.payroll.bruteSalary = this.calculateTotalDeventions();
    this.payroll.netSalary = parseFloat(this.getNetSalary().toFixed(2));
    this.payroll.baseSalary = this.employee.baseSalary;
    this.payroll.totalDeductions = parseFloat(this.getTotalDeductions().toFixed(2));
    this.payroll.commonContingenciesDeduction = parseFloat(this.getCommonContingenciesDeduction().toFixed(2));
    this.payroll.irpfDeduction = parseFloat(this.getIrpfDeduction().toFixed(2));
    this.payroll.city = this.company.city;
    this.payroll.ccc = this.company.ccc;
    this.payroll.cif = this.company.cif;
    this.payroll.employeeId = this.employee.id;
    this.payroll.employeeName = this.employee.name;
    this.payroll.employeeSecondName = this.employee.secondName;
    this.payroll.employeeLastName = this.employee.lastName;
    this.payroll.nif = this.employee.nif;
    this.payroll.naf = this.employee.naf;
    this.payroll.jobPosition = this.employee.jobPosition;
    this.payroll.retributiveGroup =  this.employee.retributiveGroup;
    this.payroll.establishmentCategory = this.employee.establishmentCategory,
    this.payrollService.addPayroll(this.payroll).subscribe(response => this.showReportButtons(response) );
  }

  /**
   * Export functions call the service function and when a response is given
   * it alerts with the response body which should be the reports path given
   */
  exportToHtml(): any{
    return this.payrollService.exportHtml(this.generatedReportId).subscribe(response => alert(JSON.stringify(response)) );
  }

  exportToPdf(): any{
    return this.payrollService.exportPdf(this.generatedReportId).subscribe(response => alert(JSON.stringify(response)));
  }

  exportToCsv(): any{
    return this.payrollService.exportCsv(this.generatedReportId).subscribe(response => alert(JSON.stringify(response)));
  }

  // given the generated payroll id, the report buttons are shown
  showReportButtons(response: number): any{
    this.generatedReportId = response;
    this.added = true;
  }

}
