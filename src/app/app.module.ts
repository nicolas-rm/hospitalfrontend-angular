
/**
 * MODULO PRINCIPAL
 * TODAS LAS IMPORTACIONES PRINCIPALES
 *  
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



/* ===================================================== */
/* =====================>> RUTAS <<===================== */
import { APP_ROUTES } from './../app.routes';

/* =====================>> RUTAS <<===================== */
/* ===================================================== */


/* ===================================================== */
/* ==================>> COMPONENTES <<================== */
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { PagesModule } from './pages/pages.module';
import { FormsModule } from '@angular/forms';

/* ==================>> COMPONENTES <<================== */
/* ===================================================== */


/* ===================================================== */
/* ===================>> SERVICIOS <<=================== */
import { ServicesModule } from './services/services.module';

/* ===================>> SERVICIOS <<=================== */
/* ===================================================== */



@NgModule({
  /**
   * DECLARACIONES: TODOS LOS COMPONENTES
   * EN LA SECCION ACTUAL (PRINCIPAL)
   */
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  /**
   * IMPORTACIONES: TODO LO QUE NO PERTENECE
   * A LA SECCION ACTUAL (PRINCIPAL)
   * --> TODO LO QUE SE USA EN LA SECCION (PRINCIPAL)
   * PERO ES EXTERNO (OTRAS SECCIONES) <--
   * 
   */
  imports: [
    /* UTILIZACION DE CICLOS Y CONDICIONALES */
    BrowserModule,
    /* IMPORTACION DE LAS RUTAS PRINCIPALES */
    APP_ROUTES,
    /* CONFIGURACION DE TODAS LAS PAGINAS */
    PagesModule,
    /* UTILIZACION DEL NGMODEL */
    FormsModule,
    /* UTILIZACION DE LOS SERVICIOS CORRESPONDIENTES */
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
