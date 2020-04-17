import { SubirArchivoService } from './../subir-Archivo/subir-archivo.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { SWAL_CREATE, SWAL_UPDATE, URL_SERVICIOS } from '../../config/config';
import { Usuarios } from '../../models/usuarios.models';

@Injectable({
   providedIn: 'root',
})
export class UsuarioService {
   usuario: Usuarios;
   user: any;
   token: string;

   constructor(
      public http: HttpClient,
      public router: Router,
      public _SUBIRARCHIVOSERVICES: SubirArchivoService,
   ) {
      console.log('Servicio De Usuario Listo');

      /* CARGAR DEL STORAGE */
      this.cargarStorage();
   }

   /* CHECHAR EL TOKEN */
   loginActive() {
      return this.token.length > 5 ? true : false;
   }

   /* CARGAR DEL STORAGE */
   cargarStorage() {
      if (localStorage.getItem('token')) {
         this.token = localStorage.getItem('token');
         this.user = JSON.parse(localStorage.getItem('usuario'));
         this.usuario = this.intercambio();
      } else {
         this.user = null;
         this.token = '';
         this.usuario = null;
      }
   }

   /* GUARDAR EN EL STORAGE */
   guardarStorage(ID_USUARIO: number, TOKEN: string, USUARIO: any) {
      /* GUARDADO DE DATOS DEL USUARIO EN EL LOCAL STORAGE */
      localStorage.setItem('id', String(ID_USUARIO));
      localStorage.setItem('token', TOKEN);
      localStorage.setItem('usuario', JSON.stringify(USUARIO));

      this.user = USUARIO;
      this.usuario = this.intercambio();
      this.token = TOKEN;
   }

   loginGoogle(token: string) {
      /* URL DEL SERVICIO DE LOGIN */
      const URL = URL_SERVICIOS + '/login/google';

      return this.http.post(URL, { token }).pipe(
         map((resp: any) => {
            this.guardarStorage(
               resp.USUARIO.ID_USUARIO,
               resp.TOKEN,
               resp.USUARIO,
            );
            return true;
         }),
      );
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
      return this.http.post(URL, usuario).pipe(
         map((resp: any) => {
            this.guardarStorage(
               resp.USUARIO.ID_USUARIO,
               resp.TOKEN,
               resp.USUARIO,
            );
            return true;
         }),
      );
   }

   logout() {
      this.token = '';
      this.user = null;
      this.usuario = null;
      localStorage.removeItem('id');
      localStorage.removeItem('token');
      localStorage.removeItem('usuario');
      this.router.navigate(['/login']);
   }

   /* CREAR USUARIO */
   create(usuario: Usuarios) {
      console.log('CREATE USER ', usuario);

      /* URL DEL SERVICIO DE USUARIO */
      const URL = URL_SERVICIOS + '/usuario';

      /* RETORNO DE LA PETICION */
      return this.http.post(URL, usuario).pipe(
         map((resp: any) => {
            /* CREACION DEL MODAL */
            SWAL_CREATE('Usuario Creado Correctamente', usuario.email);

            /* RETORNO DE SOLO LOS DATOS CREADOS */
            return true;
         }),
      );
   }

   update(usuario: Usuarios) {
      /* URL DEL SERVICIO DE USUARIO */
      const token = '?token=' + this.token;
      const URL = URL_SERVICIOS + '/usuario/' + usuario.id_usuario + token;

      return this.http.put(URL, usuario).pipe(
         map((resp: any) => {
            /* GUARDAR EN EL STORAGE */
            this.guardarStorage(resp.DATOS.ID_USUARIO, this.token, resp.DATOS);

            /* CREACION DEL MODAL */
            SWAL_UPDATE('Usuario Actualizado Correctamente', usuario.nombre);
            return true;
         }),
      );
   }

   cambiarImagen(archivo: File, id: number) {
      this._SUBIRARCHIVOSERVICES
         .subirArchivo(archivo, 'usuarios', id)
         .then((resp: any) => {
            console.log('RESP: ', resp);

            // this.usuario.img = resp.DATO.IMG;
            SWAL_UPDATE(
               'Imagen Actualizada Correctamente',
               this.usuario.nombre,
            );

            this.guardarStorage(id, this.token, resp.DATO);
            this.cargarStorage();
            // console.log('THIS.USUARIO: ', this.usuario);
         })
         .catch((err) => {
            console.error(err);
         });
   }

   intercambio() {
      return {
         nombre: this.user.NOMBRE,
         email: this.user.EMAIL,
         password: this.user.PASSWORD,
         img: this.user.IMG,
         role: this.user.ROLE,
         google: this.user.GOOGLE,
         id_usuario: this.user.ID_USUARIO,
      };
   }
}
