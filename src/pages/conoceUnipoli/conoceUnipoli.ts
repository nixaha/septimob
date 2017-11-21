import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{ CroquisPage } from "../index.paginas"

@Component({
  selector: 'page-conoceUnipoli',
  templateUrl: 'conoceUnipoli.html'
})
export class ConoceUnipoliPage {
  croquis:any = CroquisPage;

  constructor(public navCtrl: NavController) {

  }

}
