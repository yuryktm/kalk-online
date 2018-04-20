import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes'

import { AppComponent } from './app.component';

import { NDSCalculatorComponent } from './nds-calculator/nds-calculator.component';
import { CreditCalculatorComponent } from './credit-calculator/credit-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    NDSCalculatorComponent,
    CreditCalculatorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
