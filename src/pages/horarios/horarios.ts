import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{ HorariosgPage } from "../index.paginas"

@Component({
  selector: 'page-horarios',
  templateUrl: 'horarios.html'
})
export class HorariosPage {

  horariosg:any = HorariosgPage;

  constructor(public navCtrl: NavController) {

  }

}
