import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  /* VALORES POR DEFECTO EN LAS BARRAS DE PROGRESO */
  porcentaje1: number = 30;
  porcentaje2: number = 60;

  
  constructor() { }

  ngOnInit(): void {
  }


  actualizar(valor: Event) {
    console.log('Evento', valor);
  }

}
