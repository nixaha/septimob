import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LaboratoriosPage } from './laboratorios';

@NgModule({
  declarations: [
    LaboratoriosPage,
  ],
  imports: [
    IonicPageModule.forChild(LaboratoriosPage),
  ],
})
export class LaboratoriosPageModule {}
