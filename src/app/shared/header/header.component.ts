import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/services.index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(public _USUARIOSERVICES: UsuarioService) { }

  ngOnInit(): void {
  }

}
