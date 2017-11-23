import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';

@Component({
  selector: 'page-grupos',
  templateUrl: 'grupos.html'
})
export class GruposPage {

  mutante:any = {};

  constructor( public navCtrl: NavController, private navParams:NavParams ) {

    console.log( navParams );

    this.mutante = this.navParams.get('nombre');
  }

}