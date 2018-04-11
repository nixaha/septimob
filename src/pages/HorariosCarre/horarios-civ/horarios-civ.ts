import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GrupocivPage, SeleccionarCarreraPage} from '../../index.paginas';

@Component({
  selector: 'page-horarios-civ',
  templateUrl: 'horarios-civ.html',
})
export class HorariosCivPage {
  grupociv:any = GrupocivPage;
  seleccionar: any = SeleccionarCarreraPage;

  constructor(public navCtrl: NavController) {

  }
}
