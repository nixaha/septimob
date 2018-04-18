import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GruposPage, SeleccionarCarreraPage, GruposAPage, GruposBPage, GruposCPage, GruposDPage, GruposEPage} 
from '../../index.paginas';
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
  detalles(horario: Horario){
    this.navCtrl.push(GruposPage, {
      id: horario
    })
  }
}

