import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _DOCUMENT) { }

  ngOnInit() {

  }

  cambiarColor(color: string, link: any) {
    console.log('EL COLOR ES: ', color);
    console.log('EL LINK ES: ', link);
    const URL_THEMA = `../../../assets/css/colors/${color}.css`;
    this._DOCUMENT.getElementById('thema').setAttribute('href', URL_THEMA);

    this.aplicarCheck(link);
  }

  aplicarCheck(link: any) {
    const selectores: any = document.getElementsByClassName('selector');
    for (const ref of selectores) {
      ref.classList.remove('working');
    }

    link.classList.add('working');
  }
}
