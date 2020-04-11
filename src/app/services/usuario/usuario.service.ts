import { Injectable } from '@angular/core';
import { Usuarios } from '../../models/usuarios.models';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS, SWAL_CREATE } from '../../config/config';

import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  usuario: Usuarios;
  token: string;

  constructor(public http: HttpClient, public router: Router) {
    console.log('Servicio De Usuario Listo');

    this.cargarStorage();
  }

  loginActive() {
    return (this.token.length > 5) ? true : false;
  }

  cargarStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    } else {
      this.token = '';
      this.usuario = null;
    }
  }
  guardarStorage(ID_USUARIO: string, TOKEN: string, USUARIO: Usuarios) {
    /* GUARDADO DE DATOS DEL USUARIO EN EL LOCAL STORAGE */
    localStorage.setItem('id', ID_USUARIO);
    localStorage.setItem('token', TOKEN);
    localStorage.setItem('usuario', JSON.stringify(USUARIO));

    this.usuario = USUARIO;
    this.token = TOKEN;
  }

  loginGoogle(token: string) {

    /* URL DEL SERVICIO DE LOGIN */
    const URL = URL_SERVICIOS + '/login/google';

    return this.http.post(URL, { token }).pipe(map((resp: any) => {
      this.guardarStorage(resp.USUARIO.ID_USUARIO, resp.TOKEN, resp.USUARIO);

      return true;
    }));
  }

  /* INICIO DE SESION */
  login(usuario: Usuarios, recordar: boolean = false) {

    /* VALIDAR EL CHECK DE RECUERDAME */
    if (recordar) {
      /* ENVIAR EL VALOR QUE SE VA A RECORDAR */
      localStorage.setItem('email', usuario.email);
    } else {
      /* SI NO ESTA MARCADO SE ELIMINA DEL LOCAL EL VALOR */
      localStorage.removeItem('email');
    }

    /* URL DEL SERVICIO DE LOGIN */
    const URL = URL_SERVICIOS + '/login';

    /* RETORNO DE LA PETICION */
    return this.http.post(URL, usuario).pipe(map((resp: any) => {
      // /* GUARDADO DE DATOS DEL USUARIO EN EL LOCAL STORAGE */
      // localStorage.setItem('id', resp.USUARIO.ID_USUARIO);
      // localStorage.setItem('token', resp.TOKEN);
      // localStorage.setItem('usuario', JSON.stringify(resp.USUARIO));
      this.guardarStorage(resp.USUARIO.ID_USUARIO, resp.TOKEN, resp.USUARIO);

      return true;
    }));
  }


  logout() {
    this.token = '';
    this.usuario = null;
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']);
  }


  /* CREAR USUARIO */
  create(usuario: Usuarios) {
    /* URL DEL SERVICIO DE USUARIO */
    const URL = URL_SERVICIOS + '/usuario';

    /* RETORNO DE LA PETICION */
    return this.http.post(URL, usuario).pipe(map((resp: any) => {

      /* CREACION DEL MODAL */
      SWAL_CREATE('Usuario Creado Correctamente', usuario.email);

      /* RETORNO DE SOLO LOS DATOS CREADOS */
      return resp.DATOS;
    }));
  }
}
