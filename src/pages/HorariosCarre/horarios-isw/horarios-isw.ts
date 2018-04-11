import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import{ GrupoiswPage, SeleccionarCarreraPage } from "../../index.paginas"

@Component({
  selector: 'page-horarios-isw',
  templateUrl: 'horarios-isw.html',
})
export class HorariosIswPage {
  grupoisw:any = GrupoiswPage;
  seleccionar: any = SeleccionarCarreraPage;


  constructor(public navCtrl: NavController) {      
  }
}
