import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CroquisPage } from '../../index.paginas';

@Component({
  selector: 'page-laboratorios',
  templateUrl: 'laboratorios.html',
})
export class LaboratoriosPage {
  croquis: any =  CroquisPage;


  constructor(public navCtrl: NavController) {

  }


}
