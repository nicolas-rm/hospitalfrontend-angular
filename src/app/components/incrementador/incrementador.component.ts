import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {


  /*****  INPUT: VALORES DE ENTRADA *****/
  /* VALOR DE LA BARRA DE PROGRESO */
  @Input('TITULO') leyenda: string = 'Leyenda';
  /* VALOR DE LA BARRA DE PROGRESO */
  @Input() porcentaje: number = 50;

  /*****  OUPUT: VALORES DE SALIDA *****/
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();


  @ViewChild('txtProgress') txtProgress: ElementRef; 

  constructor() {
    console.log('leyenda', this.leyenda);
    console.log('leyenda', this.porcentaje);
  }

  ngOnInit(): void {
  }

  onChanges(valor: number) {
    console.log(valor);
    
    if (valor >= 100) {
      this.porcentaje = 100;
    } else if (valor <= 0) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = valor;
    }

    // input.value = Number(this.porcentaje);

    this.txtProgress.nativeElement.value = this.porcentaje;
    this.cambioValor.emit(this.porcentaje);
  }

  cambiarValor(valor: number) {

    if (this.porcentaje >= 100 && valor > 0) {
      this.porcentaje = 100;
      return;
    }
    if (this.porcentaje <= 0 && valor < 0) {
      this.porcentaje = 0;
      return;
    }
    this.porcentaje = this.porcentaje + valor;
    this.cambioValor.emit(this.porcentaje);

    /* foco */
    this.txtProgress.nativeElement.focus();
  }
}
