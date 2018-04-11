import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GrupoirtPage, SeleccionarCarreraPage } from "../../index.paginas"

@Component({
  selector: 'page-horarios-irt',
  templateUrl: 'horarios-irt.html',
})
export class HorariosIrtPage {
  grupoirt:any = GrupoirtPage;
  seleccionar: any = SeleccionarCarreraPage;

  constructor(public navCtrl: NavController) {

  }
  }

 
