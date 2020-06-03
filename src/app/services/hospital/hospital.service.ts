import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { URL_SERVICIOS, SWAL_CREATE, SWAL_DELETE, SWAL_UPDATE } from '../../config/config';
import { Hospitales } from '../../models/hospitales.models';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
   providedIn: 'root'
})
export class HospitalService {

   constructor(public http: HttpClient, public router: Router, public _USUARIOSERVICES: UsuarioService) {
      console.log('Ejecutando Servicio De Hospitales.');
   }

   create(nombre: string) {
      const token = '?token=' + this._USUARIOSERVICES.token;
      const URL = URL_SERVICIOS + '/hospital' + token;
      return this.http.post(URL, { nombre }).pipe(map((resp: any) => {
         console.log(resp);
         SWAL_CREATE('Hospital Creado Correctamente.', nombre);

      }));
   }

   read(offset: number = 0) {
      const token = '?token=' + this._USUARIOSERVICES.token;
      const URL = URL_SERVICIOS + '/hospital' + token + '&offset=' + offset;
      return this.http.get(URL).pipe(map((resp: any) => {
         console.log(resp);
         const hospitales: Hospitales[] = [];

         resp.DATOS.forEach(element => {
            hospitales.push({
               nombre: element.NOMBRE,
               img: element.IMG,
               id_hospital: element.ID_HOSPITAL
            });
         });
         resp.DATOS = hospitales;
         return resp;
      }));
   }

   buscarHospitales(termino: string) {
      const URL = URL_SERVICIOS + '/busqueda/coleccion/hospitales/' + termino;
      return this.http.get(URL).pipe(map((resp: any) => {
         console.log(resp);
         const hospitales: Hospitales[] = [];

         resp.HOSPITALES.forEach(element => {
            hospitales.push({
               nombre: element.NOMBRE,
               img: element.IMG,
               id_hospital: element.ID_HOSPITAL
            });
         });
         resp.HOSPITALES = hospitales;
         return resp;
      }));
   }

   readOne(id: number) {
      const token = '?token=' + this._USUARIOSERVICES.token;
      const URL = URL_SERVICIOS + '/hospital/' + id + token;
      return this.http.get(URL).pipe(map((resp: any) => {
         const hospitales: Hospitales[] = [];

         resp.DATOS.forEach(element => {
            hospitales.push({
               nombre: element.NOMBRE,
               img: element.IMG,
               id_hospital: element.ID_HOSPITAL
            });
         });
         resp.DATOS = hospitales;
         return resp.DATOS;
      }));
   }

   update(hospital: Hospitales) {
      const token = '?token=' + this._USUARIOSERVICES.token;
      const URL = URL_SERVICIOS + '/hospital/' + hospital.id_hospital + token;
      return this.http.put(URL, hospital).pipe(map((resp: any) => {
         SWAL_UPDATE('Hospital Actualizado Correctamente', hospital.nombre);
      }));
   }

   delete(id_hospital: number) {
      const token = '?token=' + this._USUARIOSERVICES.token;
      const URL = URL_SERVICIOS + '/hospital/' + id_hospital + token;
      return this.http.delete(URL).pipe(map((resp: any) => {
         SWAL_DELETE('Hospital', resp.DATOS.NOMBRE);
         return true;
      }));
   }

   buscarHospital(termino: string) {
      const URL = URL_SERVICIOS + '/busqueda/coleccion/usuarios/' + termino;
      return this.http.get(URL).pipe(map((resp: any) => {
         console.log(resp);
      }));
   }
}
