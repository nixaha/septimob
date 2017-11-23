import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{ HorariosIswPage } from "../index.paginas"

@Component({
  selector: 'page-horarios',
  templateUrl: 'horarios.html'
})
export class HorariosPage {

  horarios_isw:any = HorariosIswPage;

  constructor(public navCtrl: NavController) {

  }

}
