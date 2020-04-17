import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/services.index';
import { Usuarios } from '../../models/usuarios.models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  usuario: Usuarios;

  constructor(public _USUARIOSERVICES: UsuarioService) { }

  ngOnInit(): void {
    // console.log(this._USUARIOSERVICES.usuario);
    this.usuario = null;
    this.usuario = this._USUARIOSERVICES.usuario;
  }

}
