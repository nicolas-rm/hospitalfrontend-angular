import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
   providedIn: 'root'
})
export class ModalUploadService {
   public tipo: string;
   public id: number;

   public oculto: string = 'oculto';

   public notificacion = new EventEmitter<any>();

   constructor() {
      console.log('Modal Upload Listo');
   }

   ocultarModal() {
      this.oculto = 'oculto';
      this.tipo = null;
      this.id = null;
   }
   mostratModal(tipo: string, id: number) {
      this.oculto = '';
      this.tipo = tipo;
      this.id = id;
   }
}
