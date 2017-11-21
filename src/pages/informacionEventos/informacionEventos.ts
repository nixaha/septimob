import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import{ HomegPage } from "../index.paginas"

@Component({
  selector: 'page-informacionEventos',
  templateUrl: 'informacionEventos.html'
})
export class InformacionEventosPage {

  homeg:any = HomegPage;
  constructor(public navCtrl: NavController) {

  }

}