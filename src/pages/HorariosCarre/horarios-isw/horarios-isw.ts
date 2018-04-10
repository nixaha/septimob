import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import{ GrupoiswPage } from "../../index.paginas"

@Component({
  selector: 'page-horarios-isw',
  templateUrl: 'horarios-isw.html',
})
export class HorariosIswPage {
  grupoisw:any = GrupoiswPage;


  constructor(public navCtrl: NavController) {      
  }
}
