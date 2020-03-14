/**
 * CREACION DE UN MODULO
 * SECCION DE PAGINAS
 */


/* CREACION DEL MODULO */
import { NgModule } from '@angular/core';

/* UTILIZACION DE NGMODEL */
import { FormsModule } from '@angular/forms';

/* CREACION DE GRAFICAS */
import { ChartsModule } from 'ng2-charts';

/* UTILIZACION DE CONDICIONALES Y CICLOS REPETITIVOS */
import { BrowserModule } from '@angular/platform-browser';


/* ===================================================== */
/* ==================>> COMPONENTES <<================== */
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { SharedModulo } from '../shared/shared.module';
import { GraficoDonaComponent } from '../components/grafico-dona.component';

import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

/* ==================>> COMPONENTES <<================== */
/* ===================================================== */




/* ===================================================== */
/* =====================>> RUTAS <<===================== */
import { PAGES_ROUTES } from './pages.routes';

/* =====================>> RUTAS <<===================== */
/* ===================================================== */





@NgModule({
    /**
     * DECLARACIONES: TODOS LOS COMPONENTES
     * EN LA SECCION ACTUAL (PAGINAS)
     */
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonaComponent,
        AccountSettingsComponent,
        PromesasComponent,
        RxjsComponent
    ],
    /**
     * EXPORTACIONES: TODOS LOS COMPONENTES
     * QUE SE UTILIZACION FUERA DE LA 
     * SECCION ACTUAL (PAGINAS)
     */
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        GraficoDonaComponent
    ],
    /**
     * IMPORTACIONES: TODO LO QUE NO PERTENECE
     * A LA SECCION ACTUAL (PAGINAS)
     * --> TODO LO QUE SE USA EN LA SECCION (PAGINAS)
     * PERO ES EXTERNO (OTRAS SECCIONES) <--
     * 
     */
    imports: [
        /*  */
        SharedModulo,
        /* RUTAS DE TODAS LA PAGINAS */
        PAGES_ROUTES,
        /* UTILIZACION DEL NGMODEL */
        FormsModule,
        /* CREACION DE GRAFICAS */
        ChartsModule,
        /* UTILIZACION DE ESTRUCTURAS CONDICIONALES Y REPETITIVAS */
        BrowserModule
    ]
})

export class PagesModule { }

