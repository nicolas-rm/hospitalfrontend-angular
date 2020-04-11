import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor(public _USUARIOSERVICES: UsuarioService, public router: Router) {

  }
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {

    console.log('Paso Por El Login Guard');

    if (this._USUARIOSERVICES.loginActive()) {
      console.log('Paso El Guard');
      return true;
    } else {
      console.log('Bloqueado Por El Guard');
      this.router.navigate(['/login']);
      return false;
    }
    // return true;
  }

}
