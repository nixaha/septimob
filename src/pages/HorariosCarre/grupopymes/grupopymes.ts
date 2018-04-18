import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GruposPage, SeleccionarCarreraPage } from '../../index.paginas';
import { Horario } from '../../../commons/Horario';

@Component({
  selector: 'page-grupopymes',
  templateUrl: 'grupopymes.html',
})
export class GrupopymesPage {
  horario:any = {};
  grupos:any = GruposPage;
  seleccionar: any = SeleccionarCarreraPage;

  constructor(public navCtrl: NavController, private navParams:NavParams ) {

    console.log( navParams );
    this.horario = this.navParams.get('id');
  }
  detalles(img){
    this.navCtrl.push(GruposPage, {
      'img' : img
    })
  }
}

