import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {InformacionPage} from './../informacion/informacion';

@Component({
  selector: 'page-informacionEventos',
  templateUrl: 'informacionEventos.html'
})
export class InformacionEventosPage {
  informacion:any = InformacionPage;
    
  constructor(public navCtrl: NavController) {
  }

}