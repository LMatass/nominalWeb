import { NumberSymbol } from '@angular/common';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class Payroll
{   startDate: Date;
    endDate: Date;
    dateDiff: number;
    hireDate: string;

    /**
     * Company
     */

     companyId: number;
     companyName: string;
     companyAddress: string;
     city: string;
     cif: string;
     ccc: string;

     /**
      * Employee
      */
     employeeId: number;
     employeeName: string;
     employeeSecondName: string;
     employeeLastName: string;
     nif: string;
     naf: string;
     jobPosition: string;
     retributiveGroup: string;
     establishmentCategory: string;

     /**
      * Deventions
      */
     baseSalary: number;
     complement1Name = " ";
     complement1Import = 0;
     complement2Name = " ";
     complement2Import = 0;
     complement3Name =  " ";
     complement3Import = 0;
     majorForceExtraHoursImport = 0;
     otherExtraHoursImport = 0;
     complementaryHoursImport = 0;
     extraordinaryGratificationsImport = 0;
     especieSalaryImport = 0;
     totalDeventions = 0;

     // non salarial
     indemnization1Name=  " ";
     indemnization1Import = 0;
     indemnization2Name=  " ";
     indemnization2Import = 0;
     indemnization3Name=  " ";
     indemnization3Import = 0;
     SSprestationsOrIndemnizations = 0;
     otherIndemnizations = 0;
     otherSalaryPerceptions = 0;
     totalNonSalarialPerceptions = 0;

     /**
      * Dedductions
      */
     // % dedductions
     commonContingenciesPercent = 4.70;
     unemployementPercent = 1.55;
     professionalFormationPercent = 0.10;
     majorForceExtraHoursPercent = 2;
     otherExtraHoursPercent = 4.70;
     irpfPercent = 0;

     // result
     commonContingenciesDeduction = 0;
     unemployementDeduction = 0;
     professionalFormationDeduction = 0;
     majorForceExtraHoursDeduction = 0;
     otherExtraHoursDeduction = 0;
     totalAportations = 0;
     irpfDeduction = 0;


     // non %
     anticipations = 0;
     especieProductsValue = 0;
     otherDeductions = 0;
     totalDeductions = 0;

     bruteSalary: number;
     // neto
     netSalary: number;

}
