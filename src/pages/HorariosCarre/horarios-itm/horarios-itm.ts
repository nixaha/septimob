import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{ GrupoitmPage, SeleccionarCarreraPage } from "../../index.paginas"

@Component({
  selector: 'page-horarios-itm',
  templateUrl: 'horarios-itm.html',
})
export class HorariosItmPage {
  grupoitm:any = GrupoitmPage;
  seleccionar: any = SeleccionarCarreraPage;

  constructor(public navCtrl: NavController) {
  }
  }

 
