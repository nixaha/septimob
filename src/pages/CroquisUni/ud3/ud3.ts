import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CroquisPage } from '../../index.paginas';


@Component({
  selector: 'page-ud3',
  templateUrl: 'ud3.html',
})
export class Ud3Page {

  croquis: any =  CroquisPage;
  

  constructor(public navCtrl: NavController) {

  }


}
