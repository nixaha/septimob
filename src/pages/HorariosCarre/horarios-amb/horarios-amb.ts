import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GrupoambPage } from "../../index.paginas"

@Component({ 
  selector: 'page-horarios-amb',
  templateUrl: 'horarios-amb.html',
})
export class HorariosAmbPage {
  grupoamb:any = GrupoambPage;

  constructor(public navCtrl: NavController) {
  }
}


