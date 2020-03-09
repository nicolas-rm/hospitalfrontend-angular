/**
 * CREACION DE RUTAS
 */

import { RouterModule, Routes } from '@angular/router';

/* ===================================================== */
/* ==================>> COMPONENTES <<================== */
import { LoginComponent } from './app/login/login.component';
import { RegisterComponent } from './app/login/register.component';
import { NopagefoundComponent } from './app/shared/nopagefound/nopagefound.component';

/* ==================>> COMPONENTES <<================== */
/* ===================================================== */

const routes: Routes = [
    /* RUTAS PRINCIPALES */
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
