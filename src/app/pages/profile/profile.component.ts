import {SWAL_ERROR} from './../../config/config';
import {UsuarioService} from './../../services/services.index';
import {Component, OnInit} from '@angular/core';
import {Usuarios} from '../../models/usuarios.models';

@Component({
   selector: 'app-profile',
   templateUrl: './profile.component.html',
   styles: [],
})
export class ProfileComponent implements OnInit {
   usuario: Usuarios;
   imagenSubir: File;
   imagenTemp: any;

   constructor(public _USUARIOSERVICES: UsuarioService) {
      this.usuario = _USUARIOSERVICES.usuario;
   }

   ngOnInit(): void {
      // window.location.href = '#/profile';
   }

   actualizarUsuario(usuario: Usuarios) {
      this.usuario.nombre = usuario.nombre;

      if (!this.usuario.google) {
         this.usuario.email = usuario.email;
      }

      this._USUARIOSERVICES.update(this.usuario).subscribe((resp) => {
         console.log('Usuario Actualizado Correctamente: ', resp);
      });
      // console.log(this._USUARIOSERVICES.usuario);
   }

   seleccionImagen(archivo: File) {
      if (!archivo) {
         this.imagenSubir = null;
         return;
      }

      if (archivo.type.indexOf('image') < 0) {
         SWAL_ERROR('El Archivo Seleccionado No Es Una Imagen', 2300);
         return;
      }

      const reader = new FileReader();
      const urlImagenTemp = reader.readAsDataURL(archivo);

      reader.onloadend = () => {
         this.imagenTemp = reader.result;
      };
      this.imagenSubir = archivo;
   }

   cambiarImagen() {
      this._USUARIOSERVICES.cambiarImagen(
         this.imagenSubir,
         this.usuario.id_usuario,
      );
      // this.ngOnInit();
   }
}
