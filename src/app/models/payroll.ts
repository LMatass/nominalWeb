import { NumberSymbol } from '@angular/common';

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
     ccc: number;

     /**
      * Employee
      */
     employee_name: string;
     employee_second_name: string;
     employee_last_name: string;
     nif: string;
     naf: string;
     jobPosition: string;
     retributiveGroup: string;

     /**
      * Deventions
      */
     baseSalary: number;
     complement1Name: string;
     complement1Import: number;
     complement2Name: string;
     complement2Import: number;
     complement3Name: string;
     complement3Import: number;
     majorForceExtraHoursImport: number;
     otherExtraHoursImport: number;
     complementaryHoursImport: number;
     extraordinaryGratificationsImport: number;
     especieSalaryImport: number;
     totalDeventions: number;


     // non salarial
     indemnization1Name: string;
     indemnization1Import: number;
     indemnization2Name: string;
     indemnization2Import: number;
     indemnization3Name: string;
     indemnization3Import: number;
     SSprestationsOrIndemnizations: number;
     otherIndemnizations: number;
     otherSalaryPerceptions: number;
     totalNonSalarialPerceptions: number;

     /**
      * Dedductions
      */
     // % dedductions
     commonContingenciesPercent = 4.70;
     unemployementPercent = 1.55;
     professionalFormationPercent = 0.10;
     majorForceExtraHoursPercent = 2;
     otherExtraHoursPercent = 4.70;
     irpfPercent: number;

     // result
     commonContingenciesDeduction: number;
     unemployementDeduction: number;
     professionalFormationDeduction: number;
     majorForceExtraHoursDeduction: number;
     otherExtraHoursDeduction: number;
     totalAportations: number;
     irpfDeduction: number;


     // non %
     anticipations: number;
     especieProductsValue: number;
     otherDeductions: number;
     totalDeductions: number;

     bruteSalary: number;
     // neto
     netSalary: number;

}
