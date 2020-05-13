import { URL_SERVICIOS } from './../../config/config';
import { Injectable } from '@angular/core';

@Injectable({
   providedIn: 'root'
})
export class SubirArchivoService {

   constructor() { }

   subirArchivo(archivo: File, tipo: string, id: number) {

      return new Promise((resolve, reject) => {
         const formData = new FormData();
         const xhr = new XMLHttpRequest();

         formData.append('archivo', archivo, archivo.name);

         xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {

               if (xhr.status === 200) {
                  console.log('Imagen Subida');
                  resolve(JSON.parse(xhr.response));
               } else {
                  console.log('Fallo La Subida');
                  reject(xhr.response);
               }
            }
         };

         const URL = URL_SERVICIOS + '/uploads/' + tipo + '/' + id;

         xhr.open('PUT', URL, true);
         xhr.send(formData);
      });
   }
}
