import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{ HorariosIswPage,
  HorariosPyMesPage,
  HorariosItmPage,
  HorariosIrtPage,
  HorariosAmbPage,
  HorariosCivPage
 } from "../index.paginas"


@Component({
  selector: 'page-horarios',
  templateUrl: 'horarios.html'
})
export class HorariosPage {

  horarios_isw:any = HorariosIswPage;
  horarios_pymes: any = HorariosPyMesPage;
  horarios_itm: any = HorariosItmPage;
  horarios_irt: any = HorariosIrtPage;
  horarios_amb: any = HorariosAmbPage;
  horarios_civ: any = HorariosCivPage;


  constructor(public navCtrl: NavController) {

  }

}
