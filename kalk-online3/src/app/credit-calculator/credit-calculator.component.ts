import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-calculator',
  templateUrl: './credit-calculator.component.html',
  styleUrls: ['./credit-calculator.component.css']
})
export class CreditCalculatorComponent implements OnInit {

    data: any;

    constructor() {
      this.data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
      };
    }

  ngOnInit() {
  }

}
