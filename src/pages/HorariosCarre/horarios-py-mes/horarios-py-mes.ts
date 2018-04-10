import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GrupopymesPage} from '../../index.paginas';
 
@Component({
  selector: 'page-horarios-py-mes',
  templateUrl: 'horarios-py-mes.html',
})
export class HorariosPyMesPage {
  grupospymes:any = GrupopymesPage;

  constructor(public navCtrl: NavController) {
  }
  

}
