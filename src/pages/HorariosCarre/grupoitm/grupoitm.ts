import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import{ GruposPage, SeleccionarCarreraPage } from "../../index.paginas"

@Component({
  selector: 'page-grupoitm',
  templateUrl: 'grupoitm.html',
})
export class GrupoitmPage {
  horario:any = {};
  grupos:any = GruposPage;
  seleccionar: any = SeleccionarCarreraPage;

  constructor(public navCtrl: NavController, private navParams:NavParams ) {

    console.log( navParams );
    this.horario = this.navParams.get('id');
  }
}
   

