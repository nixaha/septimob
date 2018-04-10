import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GrupocivPage} from '../../index.paginas';

@Component({
  selector: 'page-horarios-civ',
  templateUrl: 'horarios-civ.html',
})
export class HorariosCivPage {
  grupociv:any = GrupocivPage;

  constructor(public navCtrl: NavController) {

  }
}
