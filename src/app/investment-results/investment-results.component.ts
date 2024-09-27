import { Component, inject } from '@angular/core';
import { InvestmentsService } from '../investments.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentsService)

  get investmentsResults() {
    return this.investmentService.getInvestments()
  }
  
}
