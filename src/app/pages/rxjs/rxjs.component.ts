import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subcription: Subscription;

  constructor() {

    /* RETRY: OPERADOR PARA REINTENTAR EL OBSERVABLE */
    // observable.pipe(retry(2))
    this.regresaObservableRetry().pipe(retry())
      /* LOS OBSERVABLES TIENEN 3 CALLBACKS */
      .subscribe(
        (result) => {
          console.log('VALOR DEL RESULTADO DEL OBSERVABLE: ', result);
        }, (err) => {
          console.log(err);
        },
        () => {
          console.log('ESTE ES EL COMPLETADO DEL OBSERVABLE');
        });



    /* MAP: ELEGIR QUE DATOS SE VAN A UTILIZAR */
    this.regresaObservableMap()
      /* LOS OBSERVABLES TIENEN 3 CALLBACKS */
      .subscribe(
        (result) => {
          console.log('VALOR DEL RESULTADO DEL OBSERVABLE: ', result);
        }, (err) => {
          console.log(err);
        },
        () => {
          console.log('ESTE ES EL COMPLETADO DEL OBSERVABLE');
        });


    /* FILTER: SOLAMENTE LOS DATOS QUE VAMOS A NECESITAR */
    this.regresaObservableFilter()
      /* LOS OBSERVABLES TIENEN 3 CALLBACKS */
      .subscribe(
        (result) => {
          console.log('VALOR DEL RESULTADO DEL OBSERVABLE: ', result);
        }, (err) => {
          console.log(err);
        },
        () => {
          console.log('ESTE ES EL COMPLETADO DEL OBSERVABLE');
        });



    /* UNSUBCRIBE: SALIR DE UN OBSERVABLE */
    /* NGONDESTROY:  CUANDO SE SALE DEL COMPONENTE */
    /* VARIABLE DE TIPO SUBCRIBE: PARA ALMACENAR EL OBSERVABLE Y PODER UTILIZARLO FUERA */
    this.subcription = this.regresaObservableUnsubcribe()
      /* LOS OBSERVABLES TIENEN 3 CALLBACKS */
      .subscribe(
        (result) => {
          console.log('VALOR DEL RESULTADO DEL OBSERVABLE: ', result);
        }, (err) => {
          console.log(err);
        },
        () => {
          console.log('ESTE ES EL COMPLETADO DEL OBSERVABLE');
        });

  }

  ngOnInit(): void {
  }


  ngOnDestroy() {
    console.log('LA PAGINA SE VA A CERRAR');
    this.subcription.unsubscribe();
  }

  regresaObservableRetry(): Observable<number> {

    /* CREAR UN OBSERVABLE */
    /**
     * LOS OBSERVABLES PUEDEN SER FINITOS O INFINITOS
     * PUEDEN CONTENER PARA OPCIONES, LA SEAN MAPS
     * FILTROS, PUEDEN SER COMPLETADOS, PUEDEN SER RE-ESCRITOS
     * O MULTIPLES CARACTERISTICAS CONTRA ERRORES Y CONINCIDENCIAS
     * ESTO DEPENDERA QUE TRATEMOS DE OBTENER CON EL OBSERVABLE.
     * 
     */
    return new Observable((oberver: Subscriber<number>) => {
      /**
       * OBSERVER: ES UN OBSERVABLE
       * OBSERVER.
       * LOS OBSERVABLES: TRABAJAN CON UNA LINEA
       * DE DATOS
       */

      let contador = 0;
      const intervalo = setInterval(() => {
        /**
         * .NEXT: ESTAMOS SUSCRITOS A CUANDO EL SIGUIENTE
         * CODIGO LLEGUE O SE EJECUTE
         * YA SEAN CAMBIOS O CUALQUIER OTRA COSA
         */
        contador = contador + 1;
        oberver.next(contador);

        if (contador === 3) {
          clearInterval(intervalo);
          /* COMPLETAR EL OBSERVABLE Y CERRAR */
          oberver.complete();
        }

        if (contador === 2) {
          /* ASI SE MANDAN ERRORES EN EL OBSERVABLE */
          // clearInterval(intervalo);

          oberver.error('AUXILIO');
          // oberver.error();
        }

      }, 1000);

    });
  }


  regresaObservableMap(): Observable<any> {

    /* CREAR UN OBSERVABLE */
    /**
     * LOS OBSERVABLES PUEDEN SER FINITOS O INFINITOS
     * PUEDEN CONTENER PARA OPCIONES, LA SEAN MAPS
     * FILTROS, PUEDEN SER COMPLETADOS, PUEDEN SER RE-ESCRITOS
     * O MULTIPLES CARACTERISTICAS CONTRA ERRORES Y CONINCIDENCIAS
     * ESTO DEPENDERA QUE TRATEMOS DE OBTENER CON EL OBSERVABLE.
     * 
     */
    return new Observable((oberver: Subscriber<any>) => {
      /**
       * OBSERVER: ES UN OBSERVABLE
       * OBSERVER.
       * LOS OBSERVABLES: TRABAJAN CON UNA LINEA
       * DE DATOS
       */

      let contador = 0;
      const intervalo = setInterval(() => {
        /**
         * .NEXT: ESTAMOS SUSCRITOS A CUANDO EL SIGUIENTE
         * CODIGO LLEGUE O SE EJECUTE
         * YA SEAN CAMBIOS O CUALQUIER OTRA COSA
         */
        contador = contador + 1;


        const salida = {
          valor: contador
        };

        oberver.next(salida);

        if (contador === 3) {
          clearInterval(intervalo);
          /* COMPLETAR EL OBSERVABLE Y CERRAR */
          oberver.complete();
        }

        // if (contador === 2) {
        //   /* ASI SE MANDAN ERRORES EN EL OBSERVABLE */
        //   // clearInterval(intervalo);

        //   oberver.error('AUXILIO');
        //   // oberver.error();
        // }

      }, 1000);

    }).pipe(map(respuesta => {
      return respuesta.valor;
    }));
  }


  regresaObservableFilter(): Observable<any> {

    /* CREAR UN OBSERVABLE */
    /**
     * LOS OBSERVABLES PUEDEN SER FINITOS O INFINITOS
     * PUEDEN CONTENER PARA OPCIONES, LA SEAN MAPS
     * FILTROS, PUEDEN SER COMPLETADOS, PUEDEN SER RE-ESCRITOS
     * O MULTIPLES CARACTERISTICAS CONTRA ERRORES Y CONINCIDENCIAS
     * ESTO DEPENDERA QUE TRATEMOS DE OBTENER CON EL OBSERVABLE.
     * 
     */
    return new Observable((oberver: Subscriber<any>) => {
      /**
       * OBSERVER: ES UN OBSERVABLE
       * OBSERVER.
       * LOS OBSERVABLES: TRABAJAN CON UNA LINEA
       * DE DATOS
       */

      let contador = 0;
      const intervalo = setInterval(() => {
        /**
         * .NEXT: ESTAMOS SUSCRITOS A CUANDO EL SIGUIENTE
         * CODIGO LLEGUE O SE EJECUTE
         * YA SEAN CAMBIOS O CUALQUIER OTRA COSA
         */
        contador = contador + 1;


        const salida = {
          valor: contador
        };

        oberver.next(salida);

        if (contador === 3) {
          clearInterval(intervalo);
          /* COMPLETAR EL OBSERVABLE Y CERRAR */
          oberver.complete();
        }

        // if (contador === 2) {
        //   /* ASI SE MANDAN ERRORES EN EL OBSERVABLE */
        //   // clearInterval(intervalo);

        //   oberver.error('AUXILIO');
        //   // oberver.error();
        // }

      }, 1000);

    }).pipe(map(respuesta => {
      return respuesta.valor;
    }),
      /* FILTER RECIBE DOS VALORES: EL VALOR Y UNA POSICION */
      filter((valor, index) => {
        console.log('FILTER');
        console.log(valor);
        console.log(index);

        if ((valor % 2) === 1) {
          /* NUMERO IMPAR */
          return true;
        } else {
          /* NUMERO PAR */
          return false;
        }
        return true;
      }));
  }


  regresaObservableUnsubcribe(): Observable<any> {

    /* CREAR UN OBSERVABLE */
    /**
     * LOS OBSERVABLES PUEDEN SER FINITOS O INFINITOS
     * PUEDEN CONTENER PARA OPCIONES, LA SEAN MAPS
     * FILTROS, PUEDEN SER COMPLETADOS, PUEDEN SER RE-ESCRITOS
     * O MULTIPLES CARACTERISTICAS CONTRA ERRORES Y CONINCIDENCIAS
     * ESTO DEPENDERA QUE TRATEMOS DE OBTENER CON EL OBSERVABLE.
     * 
     */
    return new Observable((oberver: Subscriber<any>) => {
      /**
       * OBSERVER: ES UN OBSERVABLE
       * OBSERVER.
       * LOS OBSERVABLES: TRABAJAN CON UNA LINEA
       * DE DATOS
       */

      let contador = 0;
      const intervalo = setInterval(() => {
        /**
         * .NEXT: ESTAMOS SUSCRITOS A CUANDO EL SIGUIENTE
         * CODIGO LLEGUE O SE EJECUTE
         * YA SEAN CAMBIOS O CUALQUIER OTRA COSA
         */
        contador = contador + 1;


        const salida = {
          valor: contador
        };

        oberver.next(salida);

        // if (contador === 3) {
        //   clearInterval(intervalo);
        //   /* COMPLETAR EL OBSERVABLE Y CERRAR */
        //   oberver.complete();
        // }

        // if (contador === 2) {
        //   /* ASI SE MANDAN ERRORES EN EL OBSERVABLE */
        //   // clearInterval(intervalo);

        //   oberver.error('AUXILIO');
        //   // oberver.error();
        // }

      }, 1000);

    }).pipe(map(respuesta => {
      return respuesta.valor;
    }),
      /* FILTER RECIBE DOS VALORES: EL VALOR Y UNA POSICION */
      filter((valor, index) => {
        console.log('FILTER');
        console.log(valor);
        console.log(index);

        if ((valor % 2) === 1) {
          /* NUMERO IMPAR */
          return true;
        } else {
          /* NUMERO PAR */
          return false;
        }
      }));
  }

}
