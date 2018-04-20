//nds-calculator
import {Component, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  templateUrl: './nds-calculator.component.html',
  styleUrls: ['./nds-calculator.component.css']
})

export class NDSCalculatorComponent {

  summ: any;               //Сумма
  nds: any;                //НДС
  summWithNds: any;        //Сумма с НДС
  ndsInPercent: any;       //НДС в процентах
  isCollapsed: any;        //подсказка

  private dom: Document;

  constructor(@Inject(DOCUMENT) dom: Document) {
    this.dom = dom;
    this.ndsInPercent = 18;
    this.isCollapsed = true;
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

  public onClearFields() {
    this.nds = '';
    this.summ = '';
    this.summWithNds = '';
    this.ndsInPercent = 18;
  }

  public copyElementText(id) {
    var element = null;
    try {
      element = this.dom.getElementById(id);
      element.select();
      this.dom.execCommand("copy");
    }
    finally {
      this.dom.getSelection().removeAllRanges;
    }
  }
}
