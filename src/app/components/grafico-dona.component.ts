import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  /**
   * GRAFICA DE DONAS.
   * 
   * VALORES NECESARIOS PARA QUE FUNCIONE
   * LA GRAFICA.
   * 
   * Data: EL VALOR DEL PORCENTAJE
   * Labels: EL DATO DE LA GRAFICA
   * Type: EL TIPO DE GRAFICA
   * 
   */


  /**
   * @INPUT: SIRVE PARA RECIBIR DATOS
   * FUERA DEL COMPONENTE.
   * (DONDE SE LLAMA AL COMPONENTE)
   * DESDE EL SELECTOR
   * 
   * GRAFICAS1.COMPONENT.HTML
   *  
   */


  @Input() ChartData: number[] = [];
  @Input() ChartLabels: string[] = [];
  @Input() ChartType: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
