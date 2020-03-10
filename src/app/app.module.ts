
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
// import { IncrementadorComponent } from './components/incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';
// import { GraficoDonaComponent } from './components/grafico-dona.component';

/* ==================>> COMPONENTES <<================== */
/* ===================================================== */

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    // GraficoDonaComponent,
    // IncrementadorComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
