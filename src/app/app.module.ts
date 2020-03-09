
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

/* ==================>> COMPONENTES <<================== */
/* ===================================================== */

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
