/**
 * CREACION DE MODULO
 * SECCION DE SHARED (TODO LO QUE SE REUTILIZA)
 * LO COMPARTIDO
 */

/* UTILIZACION DE DIRECTIVAS CONDICIONALES Y CICLICAS */
import { BrowserModule } from '@angular/platform-browser';

/* COMPLEMENTO PARA UTILIZAR EL ROUTER */
import { RouterModule } from '@angular/router';

/* UTILIZACION PARA EL MODULE */
import { NgModule } from '@angular/core';

import { PipesModule } from './../pipes/pipes.module';


/* ===================================================== */
/* ==================>> COMPONENTES <<================== */
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

/* ==================>> COMPONENTES <<================== */
/* ===================================================== */

@NgModule({
  /**
   * DECLARACIONES: TODOS LOS COMPONENTES
   * EN LA SECCION ACTUAL (SHARED)
   */
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    NopagefoundComponent
  ],
  /**
   * EXPORTACIONES: TODOS LOS COMPONENTES
   * QUE SE UTILIZACION FUERA DE LA
   * SECCION ACTUAL (SHARED)
   */
  exports: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    NopagefoundComponent
  ],
  /**
   * IMPORTACIONES: TODO LO QUE NO PERTENECE
   * A LA SECCION ACTUAL (SHARED)
   * --> TODO LO QUE SE USA EN LA SECCION (SHARED)
   * PERO ES EXTERNO (OTRAS SECCIONES) <--
   *
   */
  imports: [
    /* UTILIZACION DE ESTRUCTURAS CONDICIONALES Y REPETITIVAS */
    BrowserModule,
    /* COMPLEMENTO PARA UTILIZAR LAS RUTAS */
    RouterModule,
    /* UTILIZACION DE LOS PIPES CREADOS */
    PipesModule
  ]
})

export class SharedModulo { }
