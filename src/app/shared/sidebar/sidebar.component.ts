import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/services.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  /* INSTANCIACION DEL LOS DATOS DEL SIDEBAR */
  /* NOTA CUANDO SE INSTANCIAN AUTOMATICAMENTE SE MANDA A LLAMAR
  Y SE INTEGRAN LAS CONFIGURACIONES CORRESPONDIENTES EN EL SIDEBARSERVICES */
  constructor(public _SIDEBAR: SidebarService) { }

  ngOnInit(): void {
  }

}
