import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { map, filter } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {
  titulo: string;
  /**
   * router: Router: UTILIZADO PARA SACAR EL TITULO
   * PARA LA CABECERA DE LA PESTAÑA.
   * 
   * title: Title: UTILIZADO PARA MANDAR EL TITULO 
   * A LA CABECERA DE LA PESTAÑA.
   * 
   * meta: Meta: CREA UNA ETIQUETA META (INVISIBLE)
   * PARA LA IDENTIFICACION DEL COMPONENTE O LA PESTAÑA.
   * 
   */
  constructor(private router: Router, private title: Title, private meta: Meta) {

    this.getDataRoute().subscribe((resultado) => {
      // console.log(resultado);

      /* OBTIENE EL TITULO DE LA PAGINA DEL SUBCRIBE DE LA RUTA */
      this.titulo = resultado.titulo;
      /* SE MANDA EL TITULO A LA CABECERA DE LA PESTAÑA */
      this.title.setTitle(this.titulo);

      /* INSTANCIACION DE LA ETIQUETA
      DE IDENTIFICACION DEL COMPONENTE */
      const metaTag: MetaDefinition = {
        /**
         * VALORES POR DEFAULT DE UNA METADEFINITION
         * name: NOMBRE QUE RECIBE EL META-TAG
         * content: TIPO DE CONTENIDO QUE CONTIENE LA ETIQUETA
         * 
         */
        name: 'Descripcion',
        content: this.titulo
      };

      /* CREACION DE LA ETIQUETA */
      this.meta.updateTag(metaTag);
    });
  }

  ngOnInit(): void {
  }

  /* OBTENER EL TITULO DE LA PAGINA PARA MOESTRARLO
  ARRIBA EN LA PESTAÑA */
  getDataRoute() {
    return this.router.events.pipe(
      /* ACTIVATIONEND: EVENTO DONDE EXISTE 
      UN PARAMETRO DIFERENTE ENTRE TODOS LOS DEMAS
      EVENTOS */
      filter((eventos) => {
        if (eventos instanceof ActivationEnd) {
          /* RETURN: TRUE: VALOR QUE SI SE RETORNA
          OBLIGATORIO CON EL OPERADOR FILTER */
          return true;
        }
      }),
      /* RETURN: TRUE: VALOR QUE SI SE RETORNA
          OBLIGATORIO CON EL OPERADOR FILTER */
      filter((eventos: ActivationEnd) => {
        /* firstChild: VALOR UNICO ENTRE TODOS LOS EVENTOS */
        if (eventos.snapshot.firstChild === null) {
          return true;
        }
      }),
      /* MAP: UTILIZADO PARA SELECCIONAR, SOLAMENTE EL 
      DATO QUE SE NECESITA PARA PONER UN TITULO EN LA CABECERA */
      map((eventos: ActivationEnd) => {
        return eventos.snapshot.data;
      })
    );
  }
}
