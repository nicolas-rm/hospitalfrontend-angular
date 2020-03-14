import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * DECLARACION A LA FUNCION, QUE SE ENCUENTRA EN CUSTOM.JS
 * ESTA FUNCION ARREGLA DEFECTOS DE IMPLEMENTACION DE LOS
 * PLUGINS Y COMPLEMENTOS DE SIDEBAR, NAVBAR Y TODO LO DEMAS
 * ESTOS ERRORES SE PRESENTAN CUANDO SE PRECIONA EL BOTON
 * DE INGRESAR, AL INICIAR SESION
 * 
 */
declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
    /* LLAMADO A LA FUNCION, PARA LA CORRECION DE ERRORES */
    init_plugins();
  }

  /* METODO DEL BOTON DE INGRESAR | INICIAR SESION */
  ingresar() {
    /**
     * ROUTER: REFERENCIA A LA FORMA DE RUTAS
     * NAVIGATE: REDIRECCIONAMIENTO A 
     * UNA RUTA, POR EL TYPESCRIPT
     *
     */
    this.router.navigate(['/dashboard']);
  }

}
