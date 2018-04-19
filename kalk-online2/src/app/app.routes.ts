import { Routes } from '@angular/router';
import { NDSCalculatorComponent } from './nds-calculator/nds-calculator.component';
import { CreditCalculatorComponent } from './credit-calculator/credit-calculator.component';


export const ROUTES: Routes = [
  { path: '', redirectTo: 'nds-calculator', pathMatch: 'full' },
  { path: 'nds-calculator', component: NDSCalculatorComponent },
  { path: 'credit-calculator', component: CreditCalculatorComponent },

];
