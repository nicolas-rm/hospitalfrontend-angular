/**
 * CREACION DE UN MODULO
 * SECCION DE PAGINAS
 */

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

/* ===================================================== */
/* ==================>> COMPONENTES <<================== */
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { SharedModulo } from '../shared/shared.module';
import { GraficoDonaComponent } from '../components/grafico-dona.component';

/* ==================>> COMPONENTES <<================== */
/* ===================================================== */




/* ===================================================== */
/* =====================>> RUTAS <<===================== */
import { PAGES_ROUTES } from './pages.routes';

/* =====================>> RUTAS <<===================== */
/* ===================================================== */

import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { BrowserModule } from '@angular/platform-browser';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';



@NgModule({
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
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        GraficoDonaComponent
    ],
    imports: [
        SharedModulo,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule,
        BrowserModule
    ]
})

export class PagesModule { }

