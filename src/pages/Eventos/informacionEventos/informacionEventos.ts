import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {InformacionPage, SeleccionarCarreraPage} from '../../index.paginas';

@Component({
  selector: 'page-informacionEventos',
  templateUrl: 'informacionEventos.html'
})
export class InformacionEventosPage {
  informacion:any = InformacionPage;
  seleccionar: any = SeleccionarCarreraPage;
    
  constructor(public navCtrl: NavController) {
  }

}