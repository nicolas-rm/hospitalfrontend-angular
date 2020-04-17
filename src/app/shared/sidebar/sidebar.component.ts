import { Component, OnInit } from '@angular/core';
import { SidebarService, UsuarioService } from '../../services/services.index';
import { Usuarios } from '../../models/usuarios.models';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  /* VARIABLE PARA LA VISTA, DE TIPO USUARIOS */
  /* NO SE PONE EL TIPO POR LAS MAYUSCULAS
  Y MINUSCULAS DE LAS PROPIEDADES */
  usuario: Usuarios;

  /* INSTANCIACION DEL LOS DATOS DEL SIDEBAR */
  /* NOTA CUANDO SE INSTANCIAN AUTOMATICAMENTE SE MANDA A LLAMAR
  Y SE INTEGRAN LAS CONFIGURACIONES CORRESPONDIENTES EN EL SIDEBARSERVICES */
  constructor(public _SIDEBAR: SidebarService, public _USUARIOSERVICES: UsuarioService) { }

  ngOnInit(): void {
    this.usuario = this._USUARIOSERVICES.usuario;
  }

}
