import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input() ChartData: number[] = [];
  @Input() ChartLabels: string[] = [];
  @Input() ChartType: string = '';

  /* DATOS DE LA GRAFICA */
  // public ChartLabels: string[] = ['VALOR 1', 'VALOR 2', 'VALOR 3', 'VALOR 4'];

  // public ChartData: number[] = [50, 100, 150, 200];

  // public ChartType: string = 'doughnut';
  constructor() { }

  ngOnInit(): void {
  }

}
