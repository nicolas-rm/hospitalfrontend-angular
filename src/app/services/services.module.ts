/**
 * CREACION DEL MODULO
 * DE SERVICIOS
 */

/* CREACION DEL MODULO */
import { NgModule } from '@angular/core';

/* UTILIZACION PARA ESTRUCTURAS CONFICIONALES Y CICLICAS */
import { CommonModule } from '@angular/common';

/* IMPORTACION DE LOS SERVICIOS, DESDE EL ARCHIVO INDEX */
import { SharedService, SettingsService, SidebarService } from './services.index';



@NgModule({
  declarations: [],
  imports: [
    /* UTILIZACION PARA ESTRUCTURAS CONFICIONALES Y CICLICAS */
    CommonModule
  ],
  providers: [
    /* TODOS LOS SERVICIOS A UTILIZAR 
    ENTRE LAS SECCIONES DESIGNADAS */
    SharedService,
    SettingsService,
    SidebarService
  ]
})
export class ServicesModule { }
