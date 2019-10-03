import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { IResultado } from './calculator-fisica/result.model';

@Injectable()
export class CalculatorfisicaService {

  constructor(public http: HttpClient) { }
  url = "http://localhost:64390/calculator/values";
  // url ="http://fisicaapi.azurewebsites.net/calculator/values";
  headerOptions = new HttpHeaders({ 'Content-Type': 'application/json' });

  calcularFuerza(Result: IResultado) {
    return this.http.post(this.url, Result, { headers: this.headerOptions })
  }
}
