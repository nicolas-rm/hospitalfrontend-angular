import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  /**
   * DATOS PARA LA CREACION DE LAS SECCIONES DEL SIDEBAR
   * CON SUS RUTAS CORRESPONDIENTES, SU ICONO Y SU TITULO
   *
   */

  /* NOTA: EN EL HTML SE HACE REFERENCIA,
  CON EL ROUTERLINK Y ROUTERLINKACTIVE  */

  /* SIDEBAR.COMPONENT.HTML */
  menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        /* TITULO DE LA SECCION: URL DE LA RUTA A REDIRECCION */
        { titulo: 'Dashboard', url: '/dashboard' },
        { titulo: 'ProgressBar', url: '/progress' },
        { titulo: 'Graficas', url: '/graficas1' },
        { titulo: 'Promesas', url: '/promesas' },
        { titulo: 'Observables', url: '/observables' }
      ]
    }

  ];




  constructor() { }
}
