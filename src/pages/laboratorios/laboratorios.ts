import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-laboratorios',
  templateUrl: 'laboratorios.html',
})
export class LaboratoriosPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaboratoriosPage');
  }

}
