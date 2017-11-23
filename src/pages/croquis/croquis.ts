import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-croquis',
  templateUrl: 'croquis.html'
})
export class CroquisPage {

  sitio: any = {};

  constructor(public navCtrl: NavController, private navParams: NavParams) {

    console.log(navParams);
    this.sitio = this.navParams.get('id');

  }

}