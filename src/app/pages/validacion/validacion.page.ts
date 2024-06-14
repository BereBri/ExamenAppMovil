import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validacion',
  templateUrl: './validacion.page.html',
  styleUrls: ['./validacion.page.scss'],
})
export class ValidacionPage implements OnInit {
  edad: number;
  resultadoValidacion: string;

  validarEdad() {
    if (this.edad < 18) {
      this.resultadoValidacion = 'Eres menor de edad.';
    } else if (this.edad === 18) {
      this.resultadoValidacion = 'Tienes 18 años, eres mayor de edad.';
    } else {
      this.resultadoValidacion = 'Eres mayor de edad.';
    }
  }
  constructor() {}

  ngOnInit() {}
}
