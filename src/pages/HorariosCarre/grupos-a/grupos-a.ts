import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-grupos-a',
  templateUrl: 'grupos-a.html',
})
export class GruposAPage {

  img:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.img = this.navParams.get('img');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GruposAPage');
  }

}
