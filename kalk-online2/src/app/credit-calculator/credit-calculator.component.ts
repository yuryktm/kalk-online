//credit-calculator
import { Component } from '@angular/core';

@Component({
  templateUrl: './credit-calculator.component.html'
})

export class CreditCalculatorComponent {

  data: any;

  constructor() {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
    };
  }
}
