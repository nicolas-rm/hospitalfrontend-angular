/**
 * CREACION DE MODULO
 * SECCION DE SHARED (TODO LO QUE SE REUTILIZA)
 * LO COMPARTIDO
 */
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


/* ===================================================== */
/* ==================>> COMPONENTES <<================== */
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

/* ==================>> COMPONENTES <<================== */
/* ===================================================== */

@NgModule({
    declarations: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NopagefoundComponent
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NopagefoundComponent
    ],
    imports: [
        BrowserModule,
        RouterModule
    ]
})

export class SharedModulo { }
