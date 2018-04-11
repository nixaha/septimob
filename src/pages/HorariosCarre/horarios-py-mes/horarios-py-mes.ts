import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GrupopymesPage, SeleccionarCarreraPage} from '../../index.paginas';
 
@Component({
  selector: 'page-horarios-py-mes',
  templateUrl: 'horarios-py-mes.html',
})
export class HorariosPyMesPage {
  grupospymes:any = GrupopymesPage;
  seleccionar: any = SeleccionarCarreraPage;

  constructor(public navCtrl: NavController) {
  }
  

}
