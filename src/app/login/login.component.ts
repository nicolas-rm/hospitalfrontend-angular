import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/services.index';
import { Usuarios } from '../models/usuarios.models';

/**
 * DECLARACION A LA FUNCION, QUE SE ENCUENTRA EN CUSTOM.JS
 * ESTA FUNCION ARREGLA DEFECTOS DE IMPLEMENTACION DE LOS
 * PLUGINS Y COMPLEMENTOS DE SIDEBAR, NAVBAR Y TODO LO DEMAS
 * ESTOS ERRORES SE PRESENTAN CUANDO SE PRECIONA EL BOTON
 * DE INGRESAR, AL INICIAR SESION
 *
 */
declare function init_plugins();

/* UTILIZACION DE API DE GOOGLE */
declare const gapi: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  email: string;
  recuerdame: boolean = false;

  auth2: any;

  constructor(public router: Router, public _USUARIOSERVICES: UsuarioService) { }
  ngOnInit(): void {
    /* LLAMADO A LA FUNCION, PARA LA CORRECION DE ERRORES */
    init_plugins();

    /* LLAMADO A TODAS LAS FUNCIONES PARA UTILIZAR GOOGLE SING IN */
    this.googleInit();

    /* DATO DEL EMAIL EN EL INPUT */
    this.email = localStorage.getItem('email') || '';
    if (this.email.length > 1) {
      /* MARCADO DEL CHECK DE RECUERDAME */
      this.recuerdame = true;
    }
  }


  googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '388214239850-j45i81nrbuk7eaal2e0b8jfh7flq29po.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });

      this.attachSignIn(document.getElementById('btnGoogle'));
    });
  }


  attachSignIn(element: any) {
    this.auth2.attachClickHandler(element, {}, (googleUser: any) => {
      // const profile = googleUser.getBasicProfile();
      // console.log(profile);

      const token = googleUser.getAuthResponse().id_token;
      this._USUARIOSERVICES.loginGoogle(token).subscribe((resp) => {
        console.log('Usuario Autenticado Correctamente ', resp);
        window.location.href = '#/dashboard';
      });
      // console.log(token);
    });

  }

  /* METODO DEL BOTON DE INGRESAR | INICIAR SESION */
  ingresar(forma: NgForm) {
    /* SI EXISTE UN ERROR */
    if (forma.invalid) {
      return;
    }

    /* CREACION DE LOS DATOS: PARA LA GENERACION DE UN LOGIN / TOKEN */
    const usuario = new Usuarios(null, forma.value.email, forma.value.password);

    /* SERVICIO USUARIOS, LOGIN */
    this._USUARIOSERVICES.login(usuario, forma.value.recuerdame).subscribe((sesion) => {
      console.log('Iniciar Sesion: ', sesion);

      /**
       * ROUTER: REFERENCIA A LA FORMA DE RUTAS
       * NAVIGATE: REDIRECCIONAMIENTO A
       * UNA RUTA, POR EL TYPESCRIPT
       *
       */
      this.router.navigate(['/dashboard']);
    });
  }

}
