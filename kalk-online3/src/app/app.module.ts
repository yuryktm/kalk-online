import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ROUTES } from './app.routes';
import { CreditCalculatorComponent } from './credit-calculator/credit-calculator.component';
import { NdsCalculatorComponent } from './nds-calculator/nds-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    CreditCalculatorComponent,
    NdsCalculatorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
