/**
 * CREACION DEL SERVICIO DE 
 * AJUSTES DEL TEMA, DE FORMA PERSISTENTE
 */

import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  /**
   * OBJETO CON DATOS DEL TEMA PREDETERMINADO
   * o 
   * LOS DATOS DEL LOCALSTORAGE
   */

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };

  /**
   * INJECT: PODER HACER FERENCIA 
   * AL LINK DEL TEMA QUE SE ENCUENTRA 
   * EN LA CABECERA DEL TEMA
   */
  constructor(@Inject(DOCUMENT) private _DOCUMENT) {
    this.cargarAjustes();
  }


  /* GUARDAR EN LOCALSTORAGE */
  /**
   * localStorage.setItem('NOMBRE DE LA CLAVE DE IDENTIFICACION',
   * JSON.stringify(DATO | DATOS QUE SE VAN A ENVIAR)); 
   */

  guardarAjustes() {
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
    // console.log('GUARDADO EN EL LOCALSTORAGE');

  }

  /* SELECION DEL THEMA EN LOCALSTORAGE | PREDETERMINADO */

  /**
   * UTILIZACION DEL LOCALSTORAGE: 
   * CONDICIONES: LOCASTORAGE SOLAMENTE
   * ACEPTA VALORES STRING, SIN IMPORTAR COMO VAYAN UNIDOS
   * CUALQUIERO OTRO VALOR DIFERENTE DEBE SER CONVERTIDO
   *  JSON.stringify(DATOS A CONVERTIR)
   * PARA VOLVER A UTILIZAR ESE DATO
   * JSON.parse(localStorage.getItem('NOMBRE DE LA CLAVE DEL VALOR'))
   */

  cargarAjustes() {
    if (localStorage.getItem('ajustes')) {

      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      // console.log('CARGANDO DEL LOCALSTORAGE');

      /* EJECUTA EL APLICAR EL TEMA - GUARDARDO*/
      this.aplicarThema(this.ajustes.tema);
    } else {
      /* EJECUTA EL APLICAR EL TEMA - DATOS PREDETERMINADOS*/
      this.aplicarThema(this.ajustes.tema);
      // console.log('USANDO AJUSTES POR DEFAULT');
    }
  }

  /* APLICA EL TEMA CON LOS DATOS CORRESPONDIENTES */
  aplicarThema(color: string) {
    const URL_THEMA = `assets/css/colors/${color}.css`;
    this._DOCUMENT.getElementById('thema').setAttribute('href', URL_THEMA);

    /* ASIGNACION DEL COLOR(TEMA), EN EL ARREGLO 
    PARA QUE SEA GUARDADO POR SI SE CAMBIA */
    this.ajustes.tema = color;
    /* RUTA DEL THEMA SELECCIONADO */
    this.ajustes.temaUrl = URL_THEMA;

    /* GUARDA EL TEMA */
    this.guardarAjustes();

  }
}

/* ESTRUCTURA DEL OBJETO DE TEMAS */
interface Ajustes {
  temaUrl: string;
  tema: string;
}
