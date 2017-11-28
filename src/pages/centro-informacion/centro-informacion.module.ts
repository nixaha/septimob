import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CentroInformacionPage } from './centro-informacion';

@NgModule({
  declarations: [
    CentroInformacionPage,
  ],
  imports: [
    IonicPageModule.forChild(CentroInformacionPage),
  ],
})
export class CentroInformacionPageModule {}
