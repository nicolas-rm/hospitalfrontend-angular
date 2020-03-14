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

  /*****  ViewChild: HACE REFERENCIA A UN ELEMENTO HTML *****/
  @ViewChild('txtProgress') txtProgress: ElementRef;

  constructor() {
    /* IMPRESIONES POR CONSOLA SOLAMENTE PARA
    REDERECIAR LOS VALORES INICIALES */
    // console.log('leyenda', this.leyenda);
    // console.log('leyenda', this.porcentaje);
  }

  ngOnInit(): void {

  }

  /* ngModelChange: -> onChanges:  */
  /**
   * ngModelChange: EVENTO POR DEFAULT GENERADO
   * POR EL NGMODEL, CUANDO EL VALOR DEL NGMODEL
   * CAMBIA, EN ESTE CASO, SE VA A ONCHANGES 
   */
  onChanges(valor: number) {
    console.log(valor);

    if (valor >= 100) {
      this.porcentaje = 100;
    } else if (valor <= 0) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = valor;
    }


    /* SE ASIGNA EL VALOR, PORCENTAJE REFERENTE DEL NGMODEL */
    this.txtProgress.nativeElement.value = this.porcentaje;

    /* EMIT: PROPIEDAD DEL OUTPUT, SE ASIGNA DIRECTAMENTE Y 
    EJECUTARA LA ACCION CORRESPONDIENTE */
    this.cambioValor.emit(this.porcentaje);
  }

  /**
   * METODO / FUNCION DE CAMBIO DEL VALOR Y
   * VALIDACIONES
   * 
   */
  cambiarValor(valor: number) {

    /* SI EL VALOR DEL BOTON Y EL DE LA BARRA EXECEDEN 100 */
    if (this.porcentaje >= 100 && valor > 0) {
      this.porcentaje = 100;
      return;
    }
    /* SI EL VALOR DEL BOTON Y EL DE LA BARRA EXECEDEN 0 */
    if (this.porcentaje <= 0 && valor < 0) {
      this.porcentaje = 0;
      return;
    }
    /* SI NO EXECE EL VALOR, SE CAMBIARA */
    /* ASIGNACION DEL VALOR */
    this.porcentaje = this.porcentaje + valor;
    /* EMICION DEL VALOR AL INPUT */
    /* EL VALOR DE LA BARRA AL INPUT */
    this.cambioValor.emit(this.porcentaje);

    /* foco: POSICION DEL CURSO EN EL INPUT */
    this.txtProgress.nativeElement.focus();
  }
}
