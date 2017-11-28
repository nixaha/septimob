import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CafeteriasPage } from './cafeterias';

@NgModule({
  declarations: [
    CafeteriasPage,
  ],
  imports: [
    IonicPageModule.forChild(CafeteriasPage),
  ],
})
export class CafeteriasPageModule {}
