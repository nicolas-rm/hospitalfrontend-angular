import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {


    /* MANEJO DE PROMESAS */
    this.contarTres().then((mensaje) => {
      console.log('Termino... !', mensaje);
    }).catch((err) => {
      console.error('Error en la Promesa', err);

    });

    /* MANEJO DE ASYNC - AWAIT */
    this.asyncAwait();
  }

  ngOnInit(): void {
  }

  async asyncAwait() {
    try {
      let contador = 0;
      const intervalo = setInterval(() => {
        contador = contador + 1;
        console.log(contador);
        if (contador === 3) {
          clearInterval(intervalo);
        }
      }, 1000);
    } catch (err) {
      console.error(err);

    }
  }

  contarTres() {
    return new Promise((resolve, reject) => {
      let contador = 0;
      const intervalo = setInterval(() => {
        contador = contador + 1;
        console.log(contador);
        if (contador === 3) {
          /* RESOLVE:  COMPLETADO: TODO CORRECTO */
          // resolve();
          resolve('Ok');

          /* REJECT: CON ERROR: MANEJAR ERROR */
          // reject('Simplemente un error');
          /* DETENER EL INTERVALO */
          clearInterval(intervalo);
        }
      }, 1000);
    });
  }

}
