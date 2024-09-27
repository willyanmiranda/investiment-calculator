export interface InvestmentDetails {
    annualInvestment: number;
    interest: number;
    totalAmountInvested: number;
    totalInterest: number;
    valueEndOfYear: number;
    year: number;
}

export interface InvestmentParameters {
    initialInvestment: number,
    duration: number,
    expectedReturn: number,
    annualInvestment: number
}