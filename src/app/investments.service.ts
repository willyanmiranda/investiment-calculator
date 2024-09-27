import { Injectable } from "@angular/core";

import { InvestmentDetails, InvestmentParameters } from "./investment-results/investment.model";

@Injectable({providedIn: 'root'})
export class InvestmentsService {
    private investments: InvestmentDetails[] = [];

    calculateInvestments(investmentData: InvestmentParameters) {
        const {  initialInvestment, expectedReturn, duration, annualInvestment } = investmentData;  
        const annualData = [];
        let investmentValue = initialInvestment;
      
        for (let i = 0; i < duration; i++) {
          const year = i + 1;
          const interestEarnedInYear = investmentValue * (expectedReturn / 100);
          investmentValue += interestEarnedInYear + annualInvestment;
          const totalInterest =
            investmentValue - annualInvestment * year - initialInvestment;
          annualData.push({
            year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: annualInvestment,
            totalInterest: totalInterest,
            totalAmountInvested: initialInvestment + annualInvestment * year,
          });
        }

        this.investments = annualData
    }

    getInvestments() {
        return this.investments;
    }
}