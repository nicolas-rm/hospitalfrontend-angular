import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {

  /* DATOS DE LA GRAFICA */
  public ChartLabels: string[] = ['VALOR 1', 'VALOR 2', 'VALOR 3', 'VALOR 4'];

  public ChartData: number[] = [50, 100, 150, 200];

  public ChartType: string = 'doughnut';

  valor: any;
  graficos: any = {
    grafico1: {
      labels: ['Con Frijoles', 'Con Natilla', 'Con tocino'],
      data: [24, 30, 46],
      type: 'doughnut',
      leyenda: 'El pan se come con'
    },
    grafico2: {
      labels: ['Hombres', 'Mujeres'],
      data: [4500, 6000],
      type: 'doughnut',
      leyenda: 'Entrevistados'
    },
    grafico3: {
      labels: ['Si', 'No'],
      data: [95, 5],
      type: 'doughnut',
      leyenda: '¿Le dan gases los frijoles?'
    },
    grafico4: {
      labels: ['No', 'Si'],
      data: [85, 15],
      type: 'doughnut',
      leyenda: '¿Le importa que le den gases?'
    },
  };


  object: { [key: number]: string } = { 2: 'foo', 1: 'bar' };
  map = new Map([[2, 'foo'], [1, 'bar']]);
  constructor() {
    // for (let index = 0; index < this.graficos.length; index++) {
    console.log(this.graficos);
    // }
  }

  ngOnInit(): void {
    // this.ChartType.length
    // tslint:disable-next-line: prefer-for-of
  }

  valores(valores) {
    console.log('VALORES', valores);
  }
}
