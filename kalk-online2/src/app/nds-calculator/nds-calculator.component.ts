//nds-calculator
import { Component } from '@angular/core';

@Component({
  templateUrl: './nds-calculator.component.html'
})

export class NDSCalculatorComponent {

  summ: number;               //Сумма
  nds: number;                //НДС
  summWithNds: number;        //Сумма с НДС
  ndsInPercent: number;       //НДС в процентах

  constructor() {
    this.ndsInPercent = 18;
  }

  public onSumm(summ) {
    this.summ = parseFloat(summ);
    this.nds = (this.summ * this.ndsInPercent) / 100;
    this.summWithNds = this.summ + this.ndsInPercent;
  }

  public onNds(nds) {
    this.nds = parseFloat(nds);
    this.summ = (this.nds * 100) / this.ndsInPercent;
    this.summWithNds = this.summ + this.ndsInPercent;
  }

  public onSummWithNds(summWithNds) {
    this.summWithNds = parseFloat(summWithNds);
    this.nds = (this.summWithNds * this.ndsInPercent)/(100 + this.ndsInPercent);
    this.summ = this.summWithNds - this.nds;
  }

  public onNdsInPercent(ndsInPercent) {
    this.ndsInPercent = parseFloat(ndsInPercent);
    this.nds = (this.summ * this.ndsInPercent) / 100;
    this.summWithNds = this.summ + this.ndsInPercent;
  }
}
