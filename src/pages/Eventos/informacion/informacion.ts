import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';

@Component({
  selector: 'page-informacion',
  templateUrl: 'informacion.html',
})
export class InformacionPage {

  evento:any = {};
  
    constructor(public navCtrl: NavController, private navParams: NavParams) {
      console.log(navParams);
      this.evento= this.navParams.get('id');
  
    }
}
