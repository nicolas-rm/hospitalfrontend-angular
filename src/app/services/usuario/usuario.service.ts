import { Injectable } from '@angular/core';
import { Usuarios } from '../../models/usuarios.models';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS, SWAL_CREATE } from '../../config/config';

import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  constructor(public http: HttpClient) {
    console.log('Servicio De Usuario Listo');
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
      /* GUARDADO DE DATOS DEL USUARIO EN EL LOCAL STORAGE */
      localStorage.setItem('id', resp.USUARIO.ID_USUARIO);
      localStorage.setItem('token', resp.TOKEN);
      localStorage.setItem('usuario', JSON.stringify(resp.USUARIO));

      return true;
    }));
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
