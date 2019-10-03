import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Routes , RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CalculatorFisicaComponent } from './pages/calculator-fisica/calculator-fisica.component';
import { APP_ROUTES } from './app.router';
import { CalculatorfisicaService } from './pages/calculatorfisica.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CalculatorFisicaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CalculatorfisicaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
