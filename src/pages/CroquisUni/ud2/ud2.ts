import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CroquisPage } from '../../index.paginas';

@Component({
  selector: 'page-ud2',
  templateUrl: 'ud2.html',
})
export class Ud2Page {

  croquis: any =  CroquisPage;

  constructor(public navCtrl: NavController) {

  }


}
