import {Routes , RouterModule} from '@angular/router';
import { CalculatorFisicaComponent } from './pages/calculator-fisica/calculator-fisica.component';



const AppRoutes: Routes = [


  {path: 'calculate', component: CalculatorFisicaComponent},
  { path: '',
    redirectTo: '/calculate',
  pathMatch: 'full'
},



];
export const APP_ROUTES =  RouterModule.forRoot(AppRoutes, { useHash: true});
