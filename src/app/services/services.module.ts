import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService, SettingsService, SidebarComponent } from './services.index';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    SharedService,
    SettingsService,
    SidebarComponent
  ]
})
export class ServicesModule { }
