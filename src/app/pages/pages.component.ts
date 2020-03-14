import { Component, OnInit } from '@angular/core';

/**
 * DECLARACION A LA FUNCION, QUE SE ENCUENTRA EN CUSTOM.JS
 * ESTA FUNCION ARREGLA DEFECTOS DE IMPLEMENTACION DE LOS
 * PLUGINS Y COMPLEMENTOS DE SIDEBAR, NAVBAR Y TODO LO DEMAS
 * ESTOS ERRORES SE PRESENTAN CUANDO SE PRECIONA EL BOTON
 * DE INGRESAR, AL INICIAR SESION
 * 
 */
declare function init_plugins();
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /* LLAMADO A LA FUNCION, PARA LA CORRECION DE ERRORES */
    init_plugins();
  }

}
