import { ModalUploadService } from './../../components/modal-upload/modal-upload.service';
import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { Usuarios } from '../../models/usuarios.models';
import { UsuarioService } from './../../services/services.index';
import { SWAL_ERROR, SWAL_CONFIRMATION } from '../../config/config';
import { DOCUMENT } from '@angular/common';

@Component({
   selector: 'app-usuarios',
   templateUrl: './usuarios.component.html',
   styles: [],
})
export class UsuariosComponent implements OnInit {


   usuarios: Usuarios[] = [];

   offset: number = 0;

   totalRegistros: number = 0;
   cargando: boolean = true;


   constructor(public _USUARIOSERVICES: UsuarioService, @Inject(DOCUMENT) private _DOCUMENT, public _MODALUPLOADSERVICES: ModalUploadService) {

   }

   ngOnInit(): void {
      // this.detectarDispositivo();
      // console.log();
      // console.log(this.tablaUsuarios);
      this.cargarUsuarios();
      this._MODALUPLOADSERVICES.notificacion.subscribe((resp: any) => {
         this.cargarUsuarios();
      });
   }

   cargarUsuarios() {
      this.cargando = true;
      this._USUARIOSERVICES.read(this.offset).subscribe((resp: any) => {
         console.log(resp);
         this.totalRegistros = resp.DOCUMENTOS;
         this.usuarios = resp.DATOS;
         // window.onload = cambios();
         // cambios();
         this.cargando = false;
      });



   }

   cambiarDesde(valor: number) {
      // this.default = 'default';
      // console.log(valorLocal.getAttribute());
      // document.getElementById(valorLocal.)
      const offset = this.offset + valor;
      // console.log(offset);

      if (offset >= this.totalRegistros) {
         return;
      }


      if (offset < 0) {
         return;
      }

      this.offset += valor;
      // window.onload = cambios();

      this.cargarUsuarios();
      // const clase = valorLocal.classList;
      // document.addEventListener('change', cambios());

   }

   mostrarModal(id: number) {
      this._MODALUPLOADSERVICES.mostratModal('usuarios', id);
   }

   buscarUsuario(termino: string) {
      console.log(termino);

      if (termino.length <= 0) {
         this.cargarUsuarios();
         return;
      }
      this.cargando = true;

      this._USUARIOSERVICES.buscarUsuario(termino).subscribe((usuarios: Usuarios[]) => {
         this.usuarios = usuarios;
         this.cargando = false;

      });
   }

   borrarUsusario(usuario: Usuarios) {
      console.log(usuario);
      if (usuario.id_usuario === this._USUARIOSERVICES.usuario.id_usuario) {
         SWAL_ERROR(' No Se Puede Eliminar A Si Mismo', 2200);
         return;
      }

      SWAL_CONFIRMATION('Al', 'Usuario', usuario.nombre).then((resp) => {
         if (resp) {
            this._USUARIOSERVICES.delete(usuario).subscribe((respuesta) => {
               console.log('Usuario Eliminado Correctamente: ' + respuesta);
               this.cargarUsuarios();
            });
         }
      });
   }

   gurdarUsuario(usuario: Usuarios) {
      this._USUARIOSERVICES.update(usuario).subscribe();
   }

   detectarDispositivo(table: any) {
      // tslint:disable-next-line: one-variable-per-declaration
      // const table = document.getElementById('tablaDatos');
      console.log(table);


   }
}
