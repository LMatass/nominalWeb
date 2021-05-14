import { NumberSymbol } from '@angular/common';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class Payroll
{   startDate: Date;
    endDate: Date;
    dateDiff: number;

    /**
     * Company
     */

     companyName: string;
     companyAdress: string;
     city: string;
     cif: number;
     ccc: string;

     /**
      * Employee
      */
     employeeName: string;
     employeeSecondName: string;
     employeeLastName: string;
     nif: string;
     naf: string;
     jobPosition: string;
     retributiveGroup: string;
     establishmentCategory: number;

     /**
      * Deventions
      */
     baseSalary: number;
     complement1Name: string;
     complement1Import = 0;
     complement2Name: string;
     complement2Import = 0;
     complement3Name: string;
     complement3Import = 0;
     majorForceExtraHoursImport = 0;
     otherExtraHoursImport = 0;
     complementaryHoursImport = 0;
     extraordinaryGratificationsImport = 0;
     especieSalaryImport = 0;
     totalDeventions = 0;

     // non salarial
     indemnization1Name: string;
     indemnization1Import = 0;
     indemnization2Name: string;
     indemnization2Import = 0;
     indemnization3Name: string;
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
