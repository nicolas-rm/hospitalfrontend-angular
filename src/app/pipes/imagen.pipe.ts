import { URL_SERVICIOS } from './../config/config';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(imagen: string, tipo: string = 'usuarios') {
    let URL = URL_SERVICIOS + '/loads';

    if (!imagen) {
      return URL + '/usuarios/xxx';
    }

    if (imagen.indexOf('https') >= 0) {
      return imagen;
    }

    switch (tipo) {

      case 'usuarios':
        URL = URL + '/usuarios/' + imagen;
        break;

      case 'medicos':
        URL = URL + '/medicos/' + imagen;
        break;

      case 'hospitales':
        URL = URL + '/hospitales/' + imagen;
        break;

      default:
        console.log('Tipo De Imagen No Existe: usuarios, medicos, hospitales');
        break;
    }

    return URL;
  }

}
