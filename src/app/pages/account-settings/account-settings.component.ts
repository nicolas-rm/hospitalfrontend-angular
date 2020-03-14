import { Component, OnInit, Inject } from '@angular/core';
import { SettingsService } from '../../services/services.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(public _AJUSTES: SettingsService) { }

  /* FUNCION QUE SE EJECUTA CUANDO YA SE CARGO EL COMPONENTE */
  ngOnInit() {
    /* FUNCION DE CAMBIAR EL CHECK AL TEMA SELECCIONADO */
    this.colocarCheck();
  }

  /**
   *  FUNCION PARA CAMBIAR EL COLOR 
   * (COLOR: RECIBE EL COLOR LA PALETA SELECCIONADA)
   * (LINK: ELEMENTO HTML DE LA PALETA SELECCIONADA)
   */
  cambiarColor(color: string, link: any) {

    /**
     * FUNCION PARA COLOCAR EL CHECK 
     * EN LA PALETA SELECCIONADA 
     */
    this.aplicarCheck(link);

    /**
     * FUNCION PARA APLICAR EL TEMA SELECCIONADO
     * (FORMA PERSISTENTE | PREDETERMINADO)
     */
    this._AJUSTES.aplicarThema(color);
  }

  /* COLOCAR EL CHECK EN LA PALETA DE COLOR */
  aplicarCheck(link: any) {

    /* ARREGLO DE TODAS LAS PALETAS DE COLOR, CON CLASE SELECTOR */
    const selectores: any = document.getElementsByClassName('selector');
    for (const ref of selectores) {
      /* WORKING: CLASE PARA PONER LA FLECHA */
      ref.classList.remove('working');
    }

    /* WORKING: CLASE PARA PONER LA FLECHA */
    link.classList.add('working');
  }

  colocarCheck() {
    /* CHECA EL TEMA GUARDADO, EN EL OBJETO */
    const tema = this._AJUSTES.ajustes.tema;

    /* ARREGLO DE TODAS LAS PALETAS DE COLOR, CON CLASE SELECTOR */
    const selectores: any = document.getElementsByClassName('selector');
    for (const ref of selectores) {
      
      /* VALIDA SI EL TEMA EXISTE Y COLOCA EL CHECK */
      if (ref.getAttribute('data-theme') === tema) {
        /* WORKING: CLASE PARA PONER LA FLECHA */
        ref.classList.add('working');
        break;
      }
    }
  }
}
