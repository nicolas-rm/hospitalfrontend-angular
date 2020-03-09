/**
 * CREACION DE UN MODULO
 * SECCION DE PAGINAS
 */

import { NgModule } from '@angular/core';

/* ===================================================== */
/* ==================>> COMPONENTES <<================== */
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { SharedModulo } from '../shared/shared.module';

/* ==================>> COMPONENTES <<================== */
/* ===================================================== */




/* ===================================================== */
/* =====================>> RUTAS <<===================== */
import { PAGES_ROUTES } from './pages.routes';

/* =====================>> RUTAS <<===================== */
/* ===================================================== */



@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        SharedModulo,
        PAGES_ROUTES
    ]
})

export class PagesModule { }

