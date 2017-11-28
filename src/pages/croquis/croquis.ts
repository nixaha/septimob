import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';

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