


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
import { LoginGuardGuard } from '../services/services.index';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProfileComponent } from './profile/profile.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicoComponent } from './medicos/medico.component';
import { MedicosComponent } from './medicos/medicos.component';

/* ==================>> COMPONENTES <<================== */
/* ===================================================== */

const routes: Routes = [
   /* RUTAS SECUNDARIAS */
   /* ESTRUCTURA DE UNA RUTA: */

   /**
    * PATH: NOMBRE DE LA RUTA
    * COMPONENT: COMPONENTE AL CUAL HACE REFERENCIA
    * DATA(OPCIONAL): COSAS EXTRAS, TITULO, DESCRIPCION
    * ENTRE OTRAS....
    *
    */
   {
      path: '',
      component: PagesComponent,
      canActivate: [LoginGuardGuard],
      children: [
         {
            path: 'progress',
            component: ProgressComponent,
            data: { titulo: 'Progress' },
         },
         {
            path: 'dashboard',
            component: DashboardComponent,
            data: { titulo: 'Dashboard' },
         },
         {
            path: 'graficas1',
            component: Graficas1Component,
            data: { titulo: 'Graficas' },
         },
         {
            path: 'promesas',
            component: PromesasComponent,
            data: { titulo: 'Promesas' },
         },
         {
            path: 'observables',
            component: RxjsComponent,
            data: { titulo: 'Observables' },
         },
         {
            path: 'account-settings',
            component: AccountSettingsComponent,
            data: { titulo: 'Ajustes del Tema' },
         },
         {
            path: 'profile',
            component: ProfileComponent,
            data: { titulo: 'Perfil De Usuario' },
         },
         {
            path: 'usuarios',
            component: UsuariosComponent,
            data: { titulo: 'Mantenimiento De Usuarios' },
         },
         {
            path: 'hospitales',
            component: HospitalesComponent,
            data: { titulo: 'Mantenimiento De Hospitales' },
         },
         {
            path: 'medicos',
            component: MedicosComponent,
            data: { titulo: 'Mantenimiento De Medicos' },
         },
         {
            path: 'medico/:id',
            component: MedicoComponent,
            data: { titulo: 'Actualizar Medico' },
         },
         /* REDIRECCION */
         { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      ],
   },
];

/**
 * forChild: PARA RUTAS SECUNDARIAS
 */
export const PAGES_ROUTES = RouterModule.forChild(routes);
