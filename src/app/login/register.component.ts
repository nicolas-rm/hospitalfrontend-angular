import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UsuarioService } from '../services/services.index';
import { Usuarios } from '../models/usuarios.models';
import { Router } from '@angular/router';
import { SWAL_ERROR } from '../config/config';

/**
 * DECLARACION A LA FUNCION, QUE SE ENCUENTRA EN CUSTOM.JS
 * ESTA FUNCION ARREGLA DEFECTOS DE IMPLEMENTACION DE LOS
 * PLUGINS Y COMPLEMENTOS DE SIDEBAR, NAVBAR Y TODO LO DEMAS
 * ESTOS ERRORES SE PRESENTAN CUANDO SE PRECIONA EL BOTON
 * DE INGRESAR, AL INICIAR SESION
 *
 */
declare function init_plugins();
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;

  constructor(public _USUARIOSERVICES: UsuarioService, public router: Router) { }

  ngOnInit(): void {
    /* LLAMADO A LA FUNCION, PARA LA CORRECION DE ERRORES */
    init_plugins();

    /* VALIDACIONES A TRAVEZ DE LOS COMPONENTES */
    /*
    ** SE PUEDEN CREAR VALIDACIONES PERSONALIZADAS PARA
    ** CADA CAMPO Y GENERALES PARA TODO UN FORMULARIO
    */
    this.forma = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      condiciones: new FormControl(false)
    }, {
      /* VALIDACION PERSONALIZADA, CAMPOS DE LAS VALIDACIONES POR TS*/
      validators: this.sonIguales('password', 'password2')
    });

    /* LLENADO DEL FORMULARIO DE FORMA AUTOMATICA: PARA PRACTICAR */
    this.forma.setValue({
      nombre: 'Nicolás Rincón Mújica',
      email: 'nicolas.rm540@gmail.com',
      password: '123456',
      password2: '123456',
      condiciones: true
    });
  }

  /* REGISTRAR UN USUARIO */
  registrarUsuario() {

    /* SI SUCEDE UN ERROR */
    if (this.forma.invalid) {
      return;
    }
    /* SI NO SE MARCAN LOS TERMINOS Y CONDICIONES */
    if (!this.forma.value.condiciones) {
      /* MENSAJE DE ERROR */
      SWAL_ERROR('Debe De Aceptar Los Terminos y Condiciones.', 2200);
      return;
    }

    /* MODELO PARA CREAR UN USUARIO */
    const usuario = new Usuarios(
      this.forma.value.nombre,
      this.forma.value.email,
      this.forma.value.password
    );

    /* SERVICIO PARA LA CREACION DE UN USUARIO */
    this._USUARIOSERVICES.create(usuario).subscribe(
      (resp) => {
        console.log(resp);
        /* REDIRECCIONAMIENTO AL LOGIN DESPUES DE QUE TODO SALE BIEN */
        this.router.navigate(['/login']);
      });
  }

  /* VALIDAION DE LA CONTRASEÑA U OTROS CAMPOS: CON FORME AL FormGroup */
  sonIguales(campo1: string, campo2: string) {
    return (group: FormGroup) => {

      /* VALOR 1 */
      const pass1 = group.controls[campo1].value;
      /* VALOR 2 */
      const pass2 = group.controls[campo2].value;

      /* VALIDAION DE LOS CAMPOS */
      if (pass1 === pass2) {
        /* SI CUMPLE, LAS CODICIONES  */
        return null;
      }

      /* SI NO CUMPLEN LAS CONDICIONES */
      return {
        sonIguales: true
      };
    };
  }

}
