import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import{ SeleccionarCarreraPage } from "../index.paginas"

@Component({
  selector: 'page-enlaces',
  templateUrl: 'enlaces.html',
})
export class EnlacesPage {
  seleccionar: any = SeleccionarCarreraPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnlacesPage');
  }

}
