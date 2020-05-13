import { UsuarioService } from './../../services/usuario/usuario.service';
import { SubirArchivoService } from './../../services/services.index';
import { Component, OnInit } from '@angular/core';
import { SWAL_ERROR } from 'src/app/config/config';
import { ModalUploadService } from './modal-upload.service';

@Component({
   selector: 'app-modal-upload',
   templateUrl: './modal-upload.component.html',
   styles: [
   ],
})
export class ModalUploadComponent implements OnInit {
   // oculto: string = '';
   imagenSubir: File;
   imagenTemp: any;
   constructor(public _SUBIRARCHIVOSERVICES: SubirArchivoService, public _MODALUPLOADSERVICES: ModalUploadService, public _USUARIOSERVICES: UsuarioService) {
      console.log('Modal Listo');
   }

   ngOnInit(): void {
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

   subirImagen() {
      this._SUBIRARCHIVOSERVICES.subirArchivo(this.imagenSubir, this._MODALUPLOADSERVICES.tipo, this._MODALUPLOADSERVICES.id).then((resp: any) => {
         const id = localStorage.getItem('id');
         // console.log(id);
         if (this._MODALUPLOADSERVICES.id === Number(id)) {
            this._USUARIOSERVICES.guardarStorage(Number(id), this._USUARIOSERVICES.token, resp.DATO);
            this._USUARIOSERVICES.cargarStorage();
         }
         console.log('Imagen Subida Correctamente.');
         console.log(resp);
         this._MODALUPLOADSERVICES.notificacion.emit(resp);
         this.cerrarModal();
      });
   }

   cerrarModal() {
      this.imagenTemp = null;
      this.imagenSubir = null;

      this._MODALUPLOADSERVICES.ocultarModal();
   }
}
