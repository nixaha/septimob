import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{ GruposPage } from "../index.paginas"

@Component({
  selector: 'page-horariosg',
  templateUrl: 'horariosg.html'
})
export class HorariosgPage {

  grupos:any = GruposPage;

  constructor(public navCtrl: NavController) {

  }

}