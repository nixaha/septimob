import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


@Component({
  selector: 'page-centro-informacion',
  templateUrl: 'centro-informacion.html',
})
export class CentroInformacionPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CentroInformacionPage');
  }

}
