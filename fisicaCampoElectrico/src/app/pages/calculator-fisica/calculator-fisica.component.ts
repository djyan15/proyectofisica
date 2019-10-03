import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray  } from '@angular/forms';
import { debug } from 'util';
import { CalculatorfisicaService } from '../calculatorfisica.service';
import { IResultado } from './result.model';

@Component({
  selector: 'app-calculator-fisica',
  templateUrl: './calculator-fisica.component.html',
  styleUrls: ['./calculator-fisica.component.css']
})
export class CalculatorFisicaComponent implements OnInit {
  public problemForm: FormGroup;
  cargas: FormArray;
  ingresar = false;
  Fuerza: IResultado
  resultado = false;
  numList: number[] = [];
  CargasList = [];
  constructor(public fb: FormBuilder, private services: CalculatorfisicaService) { }
  ngOnInit() {

    this.problemForm = this.fb.group({
      cantidadCarga: 2,
      cargaFuerza: 0,
      cargas: this.fb.array([this.createItem("", "", "", "")])
    });
    this.problemForm.controls['cantidadCarga'].setValidators([this.generarValores()])
  }

  createItem(valorCarga,x,y,z): FormGroup {
    return this.fb.group({
      valorCarga: valorCarga,
      // valorR: valorR,
      x: x,
      y: y,
      z: z
    });
  }

  agregarCargas() {
    // debugger;
    this.ingresar = true;
    // this.problemForm.controls.cantidadCarga.value;
    this.cargas = this.problemForm.get('cargas') as FormArray;
    for (let index = 0; index < this.problemForm.controls.cantidadCarga.value; index++) {
      this.cargas.push(this.createItem("", "", "", ""));

    }
    this.cargas.removeAt(0);
  }
 CalcularCampoElectrico() {
   this.resultado = true;
  //  debugger;
   let valoresEnviar: IResultado = {
     q: [],
    //  r: [],
     j2: null,
     coordenadas: []
   };

   this.CargasList = this.problemForm.controls['cargas'].value
   for (let index = 0; index < this.CargasList.length; index++) {

     valoresEnviar.q.push(this.CargasList[index]['valorCarga'])
    //  valoresEnviar.r.push(this.CargasList[index]['valorR'])

     valoresEnviar.coordenadas.push(this.CargasList[index]['x'] + ',' + this.CargasList[index]['y'] + ',' + this.CargasList[index]['z'])

   }
   valoresEnviar.j2 = this.problemForm.controls['cargaFuerza'].value;

   this.services.calcularFuerza(valoresEnviar).subscribe((resp: IResultado) => {
           this.Fuerza = resp;
           console.log(this.Fuerza);

  });

 }
  generarValores() {
    return (control: FormGroup): { [key: string]: boolean } | null => {
      if (control.value !== "" && control.value  > 1) {
        this.numList = [];
        let cant = this.problemForm.controls.cantidadCarga.value;

        for (let index = 1; index <= cant; index++) {
          this.numList.push(index);
        }
        return null;
  }


    }
  }
}
