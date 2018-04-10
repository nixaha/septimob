import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CroquisPage } from '../../index.paginas'; 

@Component({
  selector: 'page-centro-informacion',
  templateUrl: 'centro-informacion.html',
})
export class CentroInformacionPage {

  croquis: any =  CroquisPage;
 
  constructor(public navCtrl: NavController) {
    }

}
