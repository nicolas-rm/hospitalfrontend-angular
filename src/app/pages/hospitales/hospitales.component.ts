import { Component, OnInit } from '@angular/core';
import { HospitalService } from 'src/app/services/services.index';
import { Hospitales } from '../../models/hospitales.models';
import { SWAL_CONFIRMATION, SWAL_TEXT } from '../../config/config';
import Swal from 'sweetalert2';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';

@Component({
   selector: 'app-hospitales',
   templateUrl: './hospitales.component.html',
   styles: [
   ],
})
export class HospitalesComponent implements OnInit {

   hospitales: Hospitales[] = [];
   totalDeRegistros: number = 0;
   offset: number = 0;
   cargando: boolean = true;
   archivos: boolean = true;

   paginacionValidacion: number = null;

   constructor(public _HOSPITALSERVICES: HospitalService, public _MODALUPLOADSERVICES: ModalUploadService) { }

   ngOnInit(): void {
      // this.swalText();
      this.cargarHospitales();
      this._MODALUPLOADSERVICES.notificacion.subscribe(() => {
         this.cargarHospitales();
      });
   }

   crearHospital() {
      SWAL_TEXT().then((resp: string) => {
         if (resp) {
            this._HOSPITALSERVICES.create(resp).subscribe(() => {
               this.cargarHospitales();
            });
         }
      });
   }

   buscarHospital(termino: string) {

      if (termino.length <= 0) {
         this.cargarHospitales();
         return;
      }

      this.cargando = true;
      this._HOSPITALSERVICES.buscarHospitales(termino).subscribe((resp: any) => {
         this.totalDeRegistros = resp.DOCUMENTOS;
         this.hospitales = resp.HOSPITALES;
         this.cargando = false;
      });
   }

   cargarHospitales() {
      this.cargando = true;

      this._HOSPITALSERVICES.read(this.offset).subscribe((resp: any) => {
         console.log(resp);

         this.totalDeRegistros = resp.DOCUMENTOS;
         if (this.totalDeRegistros >= 1) {
            this.hospitales = resp.DATOS;
            this.cargando = false;
            this.archivos = false;
         } else {
            this.cargando = false;
            this.archivos = true;
         }
      });
   }

   eliminarHospital(hospital: Hospitales) {
      console.log(hospital);
      SWAL_CONFIRMATION('El', 'Hospital', hospital.nombre).then((resp) => {
         if (resp) {
            this._HOSPITALSERVICES.delete(hospital.id_hospital).subscribe((respuesta) => {
               console.log('Hospital Eliminado Correctamente: ' + respuesta);
               if ((this.hospitales.length - 1) === 0) {
                  this.offset = 0;
               }
               this.cargarHospitales();
            });
         }
      });
   }

   guardarHospital(hospital: Hospitales) {
      console.log(hospital);
      this._HOSPITALSERVICES.update(hospital).subscribe();
   }

   actualizarImagen(id: number) {
      this._MODALUPLOADSERVICES.mostratModal('hospitales', id);
      // this.hospitales = null;
      // this.cargarHospitales();
   }

   cambiarDesde(valor: number) {
      // this.default = 'default';
      // console.log(valorLocal.getAttribute());
      // document.getElementById(valorLocal.)
      const offset = this.offset + valor;
      // console.log(offset);

      if (offset >= this.totalDeRegistros) {
         return;
      }


      if (offset < 0) {
         return;
      }

      this.offset += valor;
      // window.onload = cambios();

      this.cargarHospitales();
      // const clase = valorLocal.classList;
      // document.addEventListener('change', cambios());

   }

   async swalText() {
      // const ipAPI = '//api.ipify.org?format=json';

      // const inputValue = fetch(ipAPI)
      // .then(response => response.json())
      // .then(data => data.ip);

      const { value: ipAddress } = await Swal.fire({
         title: 'Enter your IP address',
         input: 'text',
         // inputValue,
         showCancelButton: true,
         inputValidator: (value) => {
            if (!value) {
               return 'You need to write something!';
            }
         }
      });

      if (ipAddress) {
         Swal.fire(`Your IP address is ${ipAddress}`);
      }
   }
}
