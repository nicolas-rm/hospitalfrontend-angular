
/**
 * CREACION DE ROUTES
 * SECCION DE PAGINAS
 */

import { RouterModule, Routes } from '@angular/router';


/* ===================================================== */
/* ==================>> COMPONENTES <<================== */
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

/* ==================>> COMPONENTES <<================== */
/* ===================================================== */

const routes: Routes = [
    /* RUTAS SECUNDARIAS */
    {
        path: '', component: PagesComponent,
        children: [
            { path: 'progress', component: ProgressComponent },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'graficas1', component: Graficas1Component },
            { path: 'promesas', component: PromesasComponent }, 
            { path: 'observables', component: RxjsComponent }, 
            { path: 'account-settings', component: AccountSettingsComponent },
            /* REDIRECCION */
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    }
];

/**
 * forChild: PARA RUTAS SECUNDARIAS
 */
export const PAGES_ROUTES = RouterModule.forChild(routes);
