import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };


  constructor(@Inject(DOCUMENT) private _DOCUMENT) {
    this.cargarAjustes();
  }


  guardarAjustes() {
    /* GUARDAR EN LOCALSTORAGE */
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
    console.log('GUARDADO EN EL LOCALSTORAGE');

  }

  cargarAjustes() {
    if (localStorage.getItem('ajustes')) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      console.log('CARGANDO DEL LOCALSTORAGE');
      this.aplicarThema(this.ajustes.tema);
    } else {
      this.aplicarThema(this.ajustes.tema);
      console.log('USANDO AJUSTES POR DEFAULT');
    }
  }

  aplicarThema(color: string) {
    const URL_THEMA = `assets/css/colors/${color}.css`;
    this._DOCUMENT.getElementById('thema').setAttribute('href', URL_THEMA);


    this.ajustes.tema = color;
    this.ajustes.temaUrl = URL_THEMA;

    this.guardarAjustes();

  }
}

interface Ajustes {
  temaUrl: string;
  tema: string;
}
