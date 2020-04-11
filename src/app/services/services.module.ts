/**
 * CREACION DEL MODULO
 * DE SERVICIOS
 */

/* CREACION DEL MODULO */
import { NgModule } from '@angular/core';

/* UTILIZACION PARA ESTRUCTURAS CONFICIONALES Y CICLICAS */
import { CommonModule } from '@angular/common';

/* IMPORTACION DE LOS SERVICIOS, DESDE EL ARCHIVO INDEX */
import { SharedService, SettingsService, SidebarService, UsuarioService, LoginGuardGuard } from './services.index';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    /* UTILIZACION PARA ESTRUCTURAS CONFICIONALES Y CICLICAS */
    CommonModule,
    /* MODULO PARA REALIZAR PETICIONES HTTP EN LOS SERVICIOS */
    HttpClientModule
  ],
  providers: [
    /* TODOS LOS SERVICIOS A UTILIZAR
    ENTRE LAS SECCIONES DESIGNADAS */
    SharedService,
    SettingsService,
    SidebarService,
    UsuarioService,
    LoginGuardGuard
  ]
})
export class ServicesModule { }
