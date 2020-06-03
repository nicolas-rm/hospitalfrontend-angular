import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { map } from 'rxjs/operators';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
   providedIn: 'root'
})
export class MedicoService {

   constructor(public http: HttpClient, public _USUARIOSERVICES: UsuarioService) {

   }

   read(offset: number = 0) {

      const token = '?token=' + this._USUARIOSERVICES.token;
      const URL = URL_SERVICIOS + '/medico' + token + '&offset=' + offset;
      return this.http.get(URL).pipe(map((resp: any) => {
         console.log(resp);
      }));
   }
}
