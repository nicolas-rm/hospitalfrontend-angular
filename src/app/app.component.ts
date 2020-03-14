import { Component } from '@angular/core';
import { SettingsService } from './services/services.index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AdminPro';

  /* INSTANCIACION DEL LOS DATOS DEL TEMA */
  /* NOTA CUANDO SE INSTANCIAN AUTOMATICAMENTE SE MANDA A LLAMAR
  Y SE INTEGRAN LAS CONFIGURACIONES CORRESPONDIENTES DEL TEMA
  SELECCIONADO  */
  constructor(public _AJUSTES: SettingsService) {
  }
}
