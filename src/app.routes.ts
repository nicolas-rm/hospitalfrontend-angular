/**
 * CREACION DE RUTAS
 */

import { RouterModule, Routes } from '@angular/router';

/* =========================================================================== */
/* ===================>> INICIO - COMPONENTES <<=================== */

import { LoginComponent } from './app/login/login.component';
import { PagesComponent } from './app/pages/pages.component';
import { RegisterComponent } from './app/login/register.component';
import { ProgressComponent } from './app/pages/progress/progress.component';
import { DashboardComponent } from './app/pages/dashboard/dashboard.component';
import { Graficas1Component } from './app/pages/graficas1/graficas1.component';
import { NopagefoundComponent } from './app/shared/nopagefound/nopagefound.component';

/* ===================>> FINAL - COMPONENTES  <<=================== */
/* =========================================================================== */

const routes: Routes = [
    /* RUTAS PRINCIPALES */
    {
        path: '', component: PagesComponent,
        /* RUTAS SECUNDARIAS */
        children: [
            { path: 'progress', component: ProgressComponent },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'graficas1', component: Graficas1Component },
            /* REDIRECCION */
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    /* PAGINAS QUE NO EXISTEN */
    { path: '**', component: NopagefoundComponent },

];

/**
 * forRoot: PARA RUTAS PRINCIPALES
 * useHash: ENVIO DE PARAMETROS POR URL
 */

export const APP_ROUTES = RouterModule.forRoot(routes, { useHash: true });
