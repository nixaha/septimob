import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CroquisPage } from '../../index.paginas'; 

@Component({
  selector: 'page-ud1',
  templateUrl: 'ud1.html',
})
export class Ud1Page {

  croquis: any =  CroquisPage;
  
  constructor(public navCtrl: NavController) {
  }
}
