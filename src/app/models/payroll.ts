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
     totalIndemnitzacionts: number;
     majorForceExtraHours: number;
     otherExtraHours: number;
     complementaryHours: number;
     extraordinaryGratifications: number;
     especieSalary: number;

     // non salarial
     totalIndemnitzations: number;
     SSprestationsOrIndemnizations: number;
     otherIndemnizations: number;
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
     irpf: number;

     // non %
     totalAportations: number;
     anticipations: number;
     especieProductsValue: number;
     otherDeductions: number;
     totalDeductions: number;

     bruteSalary: number;
     // neto
     netSalary: number;

}
