import { Component, OnInit } from '@angular/core';
import { MedicoService } from 'src/app/services/services.index';

@Component({
   selector: 'app-medicos',
   templateUrl: './medicos.component.html',
   styles: [
   ],
})
export class MedicosComponent implements OnInit {

   constructor(public _SERVICESMEDICO: MedicoService) { }

   ngOnInit(): void {
      this._SERVICESMEDICO.read().subscribe();
   }

}
