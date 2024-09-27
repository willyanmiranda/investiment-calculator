import { Component, inject } from '@angular/core';
import { InvestmentsService } from '../investments.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  private investmentService = inject(InvestmentsService)

  enteredAnualInvestiment = 0;
  enteredInitialInvestiment = 0;
  enteredExpectedReturn = 0;
  enteredDuration = 0;

  onSubmit() {
    this.investmentService.calculateInvestments({
      initialInvestment: this.enteredInitialInvestiment,
      duration: this.enteredDuration,
      expectedReturn: this.enteredExpectedReturn,
      annualInvestment: this.enteredAnualInvestiment
    })
  }

}
