import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { SeleccionarCarreraPage} from '../../index.paginas';

@Component({
  selector: 'page-grupos', 
  templateUrl: 'grupos.html'
})
export class GruposPage {

  horario:any = {};
  seleccionar: any = SeleccionarCarreraPage;

  constructor( public navCtrl: NavController, private navParams:NavParams ) {

    console.log( navParams );
    this.horario = this.navParams.get('id');
  }

}