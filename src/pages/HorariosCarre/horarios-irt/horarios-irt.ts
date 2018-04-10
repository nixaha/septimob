import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GrupoirtPage } from "../../index.paginas"

@Component({
  selector: 'page-horarios-irt',
  templateUrl: 'horarios-irt.html',
})
export class HorariosIrtPage {
  grupoirt:any = GrupoirtPage;

  constructor(public navCtrl: NavController) {

  }
  }

 
