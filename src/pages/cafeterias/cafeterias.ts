import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@Component({
  selector: 'page-cafeterias',
  templateUrl: 'cafeterias.html',
})
export class CafeteriasPage {


  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CafeteriasPage');
  }

}
